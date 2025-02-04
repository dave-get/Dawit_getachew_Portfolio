"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log(theme);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 sm:top-9 right-5">
      {theme == "dark" ? (
        <button onClick={() => setTheme("light")}>
          <SunIcon className="w-6 h-6" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
