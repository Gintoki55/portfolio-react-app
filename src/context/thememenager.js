// thememanager.js
import React, { createContext, useState } from "react";

const ThemeManagerContext = createContext();
const themeStorage = JSON.parse(localStorage.getItem("theme")) ?? [];
// switch theme
const themeNow = themeStorage === "light"? "dark":"light";
const ThemeManagerProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(themeNow); 

  return (
    <ThemeManagerContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeManagerContext.Provider>
  );
};

export { ThemeManagerContext, ThemeManagerProvider };
