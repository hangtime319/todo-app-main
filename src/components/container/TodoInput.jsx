import { useState } from "react";

const TodoInput = ({ createdTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      createdTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <section className="flex items-center justify-center gap-4 bg-white p-4 mb-6 rounded-md dark:bg-navy-900 focus-within:outline-2 focus-within:outline-blue-500">
      <span className="w-6 h-6 aspect-square rounded-full border border-gray-600"></span>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-purple-800 dark:text-purple-300 w-full border-none focus:outline-none placeholder:text-gray-600 caret-blue-500" placeholder="Create a new todo..." onKeyDown={handleKeyDown} aria-label="Create a new todo"/>
    </section>
  );
};

export default TodoInput;
