"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Learn", href: "/learn" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
];

function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Link
      href="/"
      aria-label="Nexment home"
      className="relative block w-28 shrink-0 cursor-pointer sm:w-32"
    >
      <div className="relative aspect-[3/1] w-full">
        {mounted && (
          <Image
            src={resolvedTheme === "dark" ? "/logo.png" : "/dark-logo.png"}
            alt="Nexment"
            fill
            priority
            sizes="100px"
            className="object-contain"
          />
        )}
      </div>
    </Link>
  );
}

function Brand() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Link
      href="/"
      aria-label="Nexment home"
      className="flex shrink-0 cursor-pointer items-center gap-3"
    >
      <div className="relative aspect-[3/1] w-24 shrink-0 sm:w-28">
        {mounted && (
          <Image
            src={resolvedTheme === "dark" ? "/logo.png" : "/dark-logo.png"}
            alt=""
            fill
            priority
            sizes="112px"
            className="object-contain"
          />
        )}
      </div>

      <span className="bg-border hidden h-8 w-px shrink-0 md:block" aria-hidden="true" />

      <span className="text-foreground hidden text-3xl font-bold tracking-[-0.04em] md:block">
        Nexment
      </span>
    </Link>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-9 shrink-0" aria-hidden="true" />;
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full"
    >
      <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"} text-base`} aria-hidden="true" />
    </button>
  );
}

function SocialLinks() {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <a
        href="https://github.com/nexmentorg"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="flex size-9 cursor-pointer items-center justify-center rounded-full"
      >
        <i className="fa-brands fa-github text-lg" aria-hidden="true" />
      </a>
      <a
        href="https://x.com/NexmentOfficial"
        target="_blank"
        rel="noreferrer"
        aria-label="X"
        className="flex size-9 cursor-pointer items-center justify-center rounded-full"
      >
        <i className="fa-brands fa-x-twitter text-base" aria-hidden="true" />
      </a>
    </div>
  );
}

function JoinButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="https://dash.nexment.org"
      onClick={onClick}
      className="bg-primary text-primary-foreground inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-opacity hover:opacity-80"
    >
      Join Nexment
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="text-foreground fixed top-0 z-999 w-full">
        <div className="flex h-16 w-full items-center justify-between px-3 sm:px-4">
          <Brand />

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="cursor-pointer text-sm font-medium">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <ThemeToggle />
            <SocialLinks />
            <JoinButton />
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full"
            >
              <i className="fa-solid fa-bars text-lg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`bg-background text-foreground border-border fixed inset-y-0 right-0 z-[9999] flex w-[min(85vw,360px)] flex-col border-l p-6 transition-transform duration-200 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-10 items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
            tabIndex={open ? 0 : -1}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full"
          >
            <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-4 ml-2 flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="cursor-pointer rounded-lg py-3 text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <JoinButton onClick={() => setOpen(false)} />
        </div>

        <div className="mt-auto flex items-center justify-between pt-8">
          <SocialLinks />
        </div>
      </aside>
    </>
  );
}
