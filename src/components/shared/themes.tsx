"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

type Theme = "light" | "dark" | "system";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}

      <ThemeShortcut />
    </NextThemesProvider>
  );
}

export function ThemeShortcut() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() !== "d") return;

      if (!event.ctrlKey && !event.metaKey) return;

      if (event.altKey || event.shiftKey) return;

      const target = event.target as HTMLElement | null;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable
      ) {
        return;
      }

      event.preventDefault();

      const nextTheme: Record<Theme, Theme> = {
        light: "dark",
        dark: "system",
        system: "light",
      };

      setTheme(nextTheme[theme as Theme] ?? "system");
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme, setTheme]);

  return null;
}

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button type="button" aria-label="Change theme" className="size-9 rounded-md" />;
  }

  const currentTheme = (theme ?? "system") as Theme;

  const themeConfig = {
    light: {
      label: "Light theme",
      icon: Sun,
      next: "dark" as Theme,
    },
    dark: {
      label: "Dark theme",
      icon: Moon,
      next: "system" as Theme,
    },
    system: {
      label: "System theme",
      icon: Monitor,
      next: "light" as Theme,
    },
  };

  const config = themeConfig[currentTheme];
  const Icon = config.icon;

  function changeTheme() {
    setTheme(config.next);
  }

  return (
    <button
      type="button"
      onClick={changeTheme}
      aria-label={`Change theme. Current: ${config.label}`}
      className="text-muted hover:bg-surface-elevated hover:text-primary inline-flex size-9 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-focus)] focus-visible:outline-none"
    >
      <Icon className="size-4" />
    </button>
  );
}
