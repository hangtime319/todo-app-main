import TodoTitle from "./TodoTitle";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full mb-10">
      <TodoTitle />
      <ThemeToggle />
    </header>
  );
};

export default Header;
