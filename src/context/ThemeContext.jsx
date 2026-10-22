import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
export { ThemeProvider };
