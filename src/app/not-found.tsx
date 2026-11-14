"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-bg text-text relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Dotted background */}
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
        className="relative z-10 flex max-w-lg flex-col items-center"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="text-text font-head mt-6 text-[clamp(7rem,22vw,12rem)] leading-[0.75] font-bold tracking-[-0.09em]"
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.05,
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          404
        </motion.div>

        <motion.h1
          className="font-head mt-8 text-2xl font-semibold tracking-tight sm:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Well, this is awkward.
        </motion.h1>

        <motion.p
          className="text-text-muted mt-3 max-w-sm text-sm leading-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.4 }}
        >
          The page you’re looking for wandered off. We checked under the couch. Nothing.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.4 }}
        >
          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="bg-primary text-primary-foreground hover:bg-primary-hover inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors"
            >
              <Home className="size-4" />
              Take me home
            </Link>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => window.history.back()}
            className="border-surface-border bg-surface text-surface-foreground hover:bg-surface-hover hover:border-surface-hover-border hover:text-surface-hover-text inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Go back
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-text-muted/50 absolute bottom-6 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Nexment
      </motion.p>
    </main>
  );
}
