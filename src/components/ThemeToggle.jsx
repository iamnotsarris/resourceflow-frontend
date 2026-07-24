import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Decide o tema inicial: o salvo no localStorage, ou a preferência do sistema
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  const prefereClaro = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  return prefereClaro ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Sempre que o tema muda: aplica a classe no <html> e salva a escolha
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      title={theme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro"}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full border border-line bg-surface text-fg shadow-lg hover:scale-110 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
