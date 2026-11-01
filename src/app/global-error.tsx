"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              color-mix(in srgb, var(--foreground) 20%, transparent) 1px,
              transparent 1px
            ),
            radial-gradient(
              ellipse 50% 45% at 50% 50%,
              color-mix(in srgb, var(--foreground) 6%, transparent),
              transparent 100%
            )
          `,
          backgroundSize: "24px 24px, 100% 100%",
          maskImage: "radial-gradient(ellipse 50% 45% at center, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 45% at center, black 0%, transparent 100%)",
        }}
      />

      {/* Error content */}
      <div className="relative z-10 flex flex-col items-center">
        <i
          className="fa-solid fa-triangle-exclamation text-muted-foreground text-3xl"
          aria-hidden="true"
        />

        <h1 className="mt-4 text-xl font-semibold tracking-tight">Something went wrong</h1>

        <p className="text-muted-foreground mt-2 text-sm">
          Well, that wasn&apos;t supposed to happen.
        </p>

        <button
          onClick={() => reset()}
          className="bg-primary text-primary-foreground mt-6 inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-85"
        >
          <i className="fa-solid fa-rotate-right" aria-hidden="true" />
          Try again
        </button>
      </div>
    </main>
  );
}
