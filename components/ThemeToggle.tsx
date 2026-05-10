'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from document class
    if (document.documentElement.classList.contains('dark')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-elevated dark:bg-dark-elevated text-slate-800 dark:text-slate-200 border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
    </button>
  );
}
