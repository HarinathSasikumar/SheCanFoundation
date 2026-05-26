import { useState, useEffect } from 'react';

/**
 * Custom hook to manage dark/light theme.
 * Persists preference in localStorage and applies 'dark' class to <html>.
 */
const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('she-can-theme');
    if (saved) return saved === 'dark';
    // Default to dark mode for premium feel
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('she-can-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
};

export default useTheme;
