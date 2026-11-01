"use client";

export default function Loading() {
  return (
    <main className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Subtle dot background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              color-mix(in srgb, var(--foreground) 16%, transparent) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 45% 40% at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 45% 40% at center, black, transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Spinner */}
        <div className="border-foreground/10 border-t-foreground size-11 animate-spin rounded-full border-[2.5px]" />

        {/* Loading text */}
        <p className="text-foreground mt-7 text-base font-medium tracking-tight">Loading</p>

        <p className="text-muted-foreground mt-2 text-sm">Preparing your experience...</p>
      </div>
    </main>
  );
}
