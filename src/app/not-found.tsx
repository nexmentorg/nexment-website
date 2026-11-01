import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              color-mix(in srgb, var(--foreground) 40%, transparent) 1px,
              transparent 1px
            ),
            radial-gradient(
              ellipse 55% 45% at 50% 45%,
              color-mix(in srgb, var(--foreground) 6%, transparent),
              transparent 100%
            )
          `,
          backgroundSize: "22px 22px, 100% 100%",
          maskImage: "radial-gradient(ellipse 50% 45% at center, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 45% at center, black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10">
        <p className="text-foreground text-8xl font-bold tracking-tighter sm:text-9xl">404</p>

        <h1 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">Page not found</h1>

        <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-6">
          This page went on a coffee break and never came back.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-primary text-primary-foreground inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-85"
          >
            <i className="fa-solid fa-house" aria-hidden="true" />
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
