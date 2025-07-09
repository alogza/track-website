// context/LanguageContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({ language: "en", setLanguage: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
