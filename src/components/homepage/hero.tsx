"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const backgroundImage =
    mounted && resolvedTheme === "dark"
      ? "/images/dark-hero-bg.webp"
      : "/images/light-hero-bg.webp";

  return (
    <section className="bg-background text-foreground relative isolate flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-4 py-30 sm:px-6">
      <div className="absolute inset-0 -z-20">
        {mounted && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="bg-background/45 absolute inset-0 -z-10 backdrop-blur-[2px]" />
      <div className="from-background/30 via-background/45 to-background/80 absolute inset-0 -z-10 bg-gradient-to-b" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="text-muted-foreground mb-6 text-sm font-medium tracking-[0.2em] uppercase sm:text-base">
          The developer community
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Make things.
          <br />
          <span className="text-muted-foreground">Make them matter.</span>
        </h1>

        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7 sm:text-lg">
          Build cool stuff, learn things the hard way, and meet people who think debugging at 2 AM
          is a personality trait.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="https://dash.nexment.org"
            className="bg-primary text-primary-foreground inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-7 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-85 active:translate-y-0 sm:w-auto"
          >
            Join Nexment
            <i className="fa-solid fa-chevron-right text-xs" aria-hidden="true" />
          </Link>

          <Link
            href="/projects"
            className="border-foreground/15 hover:bg-foreground/5 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full border px-7 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
          >
            Explore projects
          </Link>
        </div>
      </div>
    </section>
  );
}
