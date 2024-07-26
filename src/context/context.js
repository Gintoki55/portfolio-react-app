// LanguageContext.js
import { createContext, useState } from "react";

export const LanguageContext = createContext();
const getInitialLangauge = () => {
  return localStorage.getItem("i18nextLng") || "en";
}
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(getInitialLangauge);

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


