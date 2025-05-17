import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: "fr" | "en";
  toggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
}) => {
  return (
    <header className="bg-gray-100 dark:bg-[#0b1120] shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/lecheetah" className="text-2xl font-bold text-gray-900 dark:text-white">
        {language === "fr" ? "Notes IA" : "AI Notes"}
      </Link>

      <nav className="flex items-center space-x-4">
        <Link
          to="/lecheetah/about"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          {language === "fr" ? "À propos" : "About"}
        </Link>

        <button
          onClick={toggleLanguage}
          className="text-sm text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-500 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {language === "fr" ? "EN" : "FR"}
        </button>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
          )}
        </button>
      </nav>
    </header>
  );
};
