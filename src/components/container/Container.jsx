import Header from "../header/Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ListFooter from "./ListFooter";
import useTodos from "../../hooks/useTodos";
import Filters from "./Filters";

const Container = () => {
  const { taskList, currentFilter, filteredTasks, createdTodo, deleteTask, checkTask, reorderTask, clearCompletedTask, handleChangeFilter } = useTodos();

  return (
    <div className="w-full max-w-lg px-6 md:px-0">
      <Header />
      <TodoInput createdTodo={createdTodo} />
      <div className="bg-white dark:bg-navy-900 shadow-xl shadow-gray-300 dark:shadow-gray-950 rounded-md overflow-hidden">
        <TodoList taskList={filteredTasks} deleteTask={deleteTask} checkTask={checkTask} reorderTask={reorderTask} />
        <ListFooter taskList={taskList} currentFilter={currentFilter} handleChangeFilter={handleChangeFilter} clearCompletedTask={clearCompletedTask} />
      </div>
      <div className="flex items-center justify-center mt-4 p-4 rounded-md bg-white dark:bg-navy-900 shadow-xl shadow-gray-100 dark:shadow-gray-950 md:hidden">
        <Filters currentFilter={currentFilter} handleChangeFilter={handleChangeFilter} />
      </div>
    </div>
  );
};

export default Container;
