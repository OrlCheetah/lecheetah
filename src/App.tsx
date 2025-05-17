import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar";
import IANotes from "@/pages/IANotes";
import About from "@/pages/About"; // Assure-toi que ce fichier existe
import { Footer } from "@/components/ui/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    const savedLang = localStorage.getItem("lang") as "fr" | "en" | null;
    setDarkMode(savedTheme);
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <Router>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
        language={language}
        toggleLanguage={() => setLanguage((prev) => (prev === "fr" ? "en" : "fr"))}
      />
      <Routes>
        <Route path="/" element={<IANotes
                  language={language}
                  setLanguage={setLanguage}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm} />} />
        <Route path="/about" element={<About language={language} />} />
      </Routes>
      <Footer language={language} />
    </Router>
  );
}
