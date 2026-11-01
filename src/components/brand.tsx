"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const textSizes = {
  1: "text-xl",
  2: "text-2xl",
  3: "text-3xl",
  4: "text-4xl",
  5: "text-5xl",
} as const;

type Size = keyof typeof textSizes;

type LogoProps = {
  className?: string;
  width?: number;
  priority?: boolean;
};

type WordmarkProps = {
  className?: string;
  size?: Size;
};

type BrandProps = {
  className?: string;
  logoWidth?: number;
  priority?: boolean;
  size?: Size;
};

function LogoImage({
  className,
  width,
  priority,
}: {
  className?: string;
  width: number;
  priority: boolean;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={resolvedTheme === "light" ? "/dark-logo.png" : "/logo.png"}
      alt="Nexment"
      width={width}
      height={width / 3}
      priority={priority}
      className={`block h-auto object-contain ${className ?? ""}`}
    />
  );
}

export function Logo({ className, width = 120, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Nexment homepage"
      className={`inline-flex shrink-0 ${className ?? ""}`}
    >
      <LogoImage width={width} priority={priority} />
    </Link>
  );
}

export function Wordmark({ className, size = 2 }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center font-semibold tracking-tight ${
        textSizes[size]
      } ${className ?? ""}`}
    >
      Nexment
    </Link>
  );
}

export function Brand({ className, logoWidth = 120, priority = false, size = 2 }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Nexment homepage"
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <LogoImage width={logoWidth} priority={priority} />
      <span className={`font-semibold tracking-tight ${textSizes[size]}`}>Nexment</span>
    </Link>
  );
}
