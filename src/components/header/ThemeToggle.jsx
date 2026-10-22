import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const iconBaseUrl = import.meta.env.BASE_URL;

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button className="cursor-pointer" onClick={handleThemeToggle}>
      <img className="w-6 h-6" src={`${iconBaseUrl}${theme === "dark" ? "icon-sun.svg" : "icon-moon.svg"}`} alt={`${theme === "dark" ? "Change to light mode" : "Change to dark mode"}`}  />
    </button>
  );
};

export default ThemeToggle;
