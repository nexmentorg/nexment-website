"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-bg text-text relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              color-mix(in oklch, var(--text) 60%, transparent) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 55% 50% at center, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 50% at center, black 0%, transparent 72%)",
        }}
      />

      <motion.div
        className="relative z-10 flex max-w-md flex-col items-center"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="text-text font-head mt-7 text-6xl font-bold tracking-[-0.06em]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.08,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Oops.
        </motion.div>

        <motion.h1
          className="font-head mt-4 text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          The server had a moment.
        </motion.h1>

        <motion.p
          className="text-text-muted mt-3 text-sm leading-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.27 }}
        >
          Something went wrong behind the scenes. No need to panic. Probably.
        </motion.p>

        <motion.button
          type="button"
          onClick={() => reset()}
          className="bg-primary text-primary-foreground hover:bg-primary-hover mt-8 inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <RefreshCcw className="size-4" />
          </motion.span>
          Try again
        </motion.button>
      </motion.div>

      <p className="text-text-muted/50 absolute bottom-6 text-xs">Nexment</p>
    </main>
  );
}
