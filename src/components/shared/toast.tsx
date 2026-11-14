"use client";

import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { Bell, CircleCheck, CircleX, Info, TriangleAlert, X, type LucideIcon } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ToastType = "success" | "info" | "warning" | "error" | null;

export type ToastPosition = "top-right" | "top-center" | "top-left";

export interface ToastOptions {
  type?: ToastType;
  position?: ToastPosition;
  title: string;
  description?: string;
}

const TOAST_DURATION_MS = 7000;
const MAX_STORED_TOASTS = 20;
const MAX_VISIBLE = 3;
const STACK_OFFSET = 12;
const STACK_SCALE_STEP = 0.05;
const STACK_OPACITY = [1, 0.75, 0.5] as const;

const POSITIONS: readonly ToastPosition[] = ["top-right", "top-center", "top-left"];

interface ToastItem {
  id: string;
  type: ToastType;
  position: ToastPosition;
  title: string;
  description?: string;
}

type Listener = () => void;

const EMPTY: readonly ToastItem[] = [];

let toasts: readonly ToastItem[] = EMPTY;
let counter = 0;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = () => toasts;
const getServerSnapshot = () => EMPTY;

function dismiss(id?: string) {
  const next = id === undefined ? EMPTY : toasts.filter((item) => item.id !== id);
  if (next.length === toasts.length) return;
  toasts = next;
  emit();
}

function toast(options: ToastOptions): string {
  if (typeof window === "undefined") return "";

  const item: ToastItem = {
    id: `toast-${++counter}`,
    type: options.type ?? null,
    position: options.position ?? "top-right",
    title: options.title,
    description: options.description,
  };

  toasts = [...toasts, item].slice(-MAX_STORED_TOASTS);
  emit();
  return item.id;
}

toast.dismiss = dismiss;

interface TypeConfig {
  Icon: LucideIcon;
  label: string | null;
  iconClass: string;
  barClass: string;
}

const TYPE_CONFIG: Record<NonNullable<ToastType> | "default", TypeConfig> = {
  success: {
    Icon: CircleCheck,
    label: "Success",
    iconClass: "text-success",
    barClass: "bg-success",
  },
  info: {
    Icon: Info,
    label: "Info",
    iconClass: "text-info",
    barClass: "bg-info",
  },
  warning: {
    Icon: TriangleAlert,
    label: "Warning",
    iconClass: "text-warning",
    barClass: "bg-warning",
  },
  error: {
    Icon: CircleX,
    label: "Error",
    iconClass: "text-error",
    barClass: "bg-error",
  },
  default: {
    Icon: Bell,
    label: null,
    iconClass: "text-text",
    barClass: "bg-text",
  },
};

const POSITION_CLASS: Record<ToastPosition, string> = {
  "top-right": "right-4 sm:right-6",
  "top-left": "left-4 sm:left-6",
  "top-center": "left-1/2 -translate-x-1/2",
};

const OFFSCREEN: Record<ToastPosition, { x: number; y: number }> = {
  "top-right": { x: 48, y: -8 },
  "top-left": { x: -48, y: -8 },
  "top-center": { x: 0, y: -48 },
};

function ToastProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      {children}
      <div role="region" aria-label="Notifications">
        {POSITIONS.map((position) => (
          <ToastStack
            key={position}
            position={position}
            items={items.filter((item) => item.position === position)}
          />
        ))}
      </div>
    </>
  );
}

function ToastStack({ position, items }: { position: ToastPosition; items: readonly ToastItem[] }) {
  const [heights, setHeights] = useState<Record<string, number>>({});

  const handleHeight = useCallback((id: string, height: number | undefined) => {
    setHeights((prev) => {
      if (height === undefined) {
        if (!(id in prev)) return prev;
        const next = { ...prev };
        delete next[id];
        return next;
      }
      if (prev[id] === height) return prev;
      return { ...prev, [id]: height };
    });
  }, []);

  const front = items[items.length - 1];
  const frontHeight = front ? heights[front.id] : undefined;

  return (
    <div
      className={`pointer-events-none fixed top-[max(1rem,env(safe-area-inset-top))] z-[100] w-[calc(100vw-2rem)] max-w-[380px] sm:top-6 ${POSITION_CLASS[position]}`}
    >
      <AnimatePresence initial={false}>
        {items.map((item, index) => (
          <ToastView
            key={item.id}
            item={item}
            index={index}
            depth={items.length - 1 - index}
            frontHeight={frontHeight}
            onHeight={handleHeight}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ToastView({
  item,
  index,
  depth,
  frontHeight,
  onHeight,
}: {
  item: ToastItem;
  index: number;
  depth: number;
  frontHeight: number | undefined;
  onHeight: (id: string, height: number | undefined) => void;
}) {
  const { id, type, position, title, description } = item;
  const config = TYPE_CONFIG[type ?? "default"];
  const { Icon } = config;

  const isFront = depth === 0;
  const isVisible = depth < MAX_VISIBLE;
  const clampedDepth = Math.min(depth, MAX_VISIBLE - 1);

  const prefersReducedMotion = useReducedMotion();
  const isPresent = useIsPresent();

  const measureRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || !isPresent) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tween = gsap.fromTo(
      bar,
      { scaleX: 1 },
      {
        scaleX: 0,
        duration: TOAST_DURATION_MS / 1000,
        ease: reduceMotion ? "steps(7)" : "none",
        onComplete: () => dismiss(id),
      },
    );

    return () => {
      tween.kill();
    };
  }, [id, isPresent]);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => onHeight(id, el.offsetHeight));
    observer.observe(el);

    return () => {
      observer.disconnect();
      onHeight(id, undefined);
    };
  }, [id, onHeight]);

  const offscreen = prefersReducedMotion ? { x: 0, y: 0 } : OFFSCREEN[position];
  const urgent = type === "error" || type === "warning";

  return (
    <motion.div
      role={isFront ? (urgent ? "alert" : "status") : undefined}
      aria-live={isFront ? (urgent ? "assertive" : "polite") : undefined}
      aria-atomic={isFront ? true : undefined}
      aria-hidden={isFront ? undefined : true}
      initial={{ opacity: 0, x: offscreen.x, y: offscreen.y, scale: 1 }}
      animate={{
        opacity: isVisible ? STACK_OPACITY[clampedDepth] : 0,
        x: 0,
        y: clampedDepth * STACK_OFFSET + (isVisible ? 0 : STACK_OFFSET),
        scale: 1 - clampedDepth * STACK_SCALE_STEP,
        height: isFront || frontHeight === undefined ? "auto" : frontHeight,
      }}
      exit={{
        opacity: 0,
        x: offscreen.x,
        y: offscreen.y,
        transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.2, ease: "easeIn" },
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              default: {
                type: "spring",
                stiffness: 420,
                damping: 36,
                mass: 0.8,
              },
              opacity: { duration: 0.2 },
            }
      }
      style={{ zIndex: index, transformOrigin: "50% 100%" }}
      className={`absolute inset-x-0 top-0 ${
        isFront ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-white text-zinc-950 shadow-lg ring-1 shadow-black/5 ring-zinc-950/10 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-white/10">
        <div ref={measureRef}>
          <div
            className={`flex items-start gap-3 p-4 pr-11 transition-opacity duration-200 ${
              isFront ? "opacity-100" : "opacity-0"
            }`}
          >
            <Icon aria-hidden="true" className={`mt-0.5 size-5 shrink-0 ${config.iconClass}`} />
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-5 font-medium break-words">
                {config.label && <span className="sr-only">{config.label}: </span>}
                {title}
              </p>
              {description && (
                <p className="mt-1 text-sm leading-5 break-words text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              )}
            </div>
          </div>
          <div aria-hidden="true" className="h-0.5 w-full bg-zinc-100 dark:bg-zinc-800">
            <div
              ref={barRef}
              className={`h-full w-full origin-left will-change-transform ${config.barClass}`}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => dismiss(id)}
          tabIndex={isFront ? 0 : -1}
          aria-label="Dismiss notification"
          className="absolute top-2.5 right-2.5 rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:outline-none dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-100"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>
    </motion.div>
  );
}

export { ToastProvider, toast };
