export default function Loading() {
  return (
    <main className="bg-bg text-text relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              color-mix(in oklch, var(--text) 45%, transparent) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 50% 45% at center, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 45% at center, black, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div
          className="border-surface-border border-t-primary size-8 animate-spin rounded-full border-2"
          style={{ animationDuration: "700ms" }}
        />

        <p className="text-text-muted animate-pulse text-xs tracking-wide">Loading...</p>
      </div>
    </main>
  );
}
