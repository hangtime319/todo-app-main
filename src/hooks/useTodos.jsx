import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const getInitialTaskList = () => {
  return JSON.parse(localStorage.getItem("taskList")) || [];
};

const useTodos = () => {
  const [taskList, setTaskList] = useState(getInitialTaskList);

  const [currentFilter, setCurrentFilter] = useState("all");

  const handleChangeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const createdTodo = (task) => {
    setTaskList((prev) => [...prev, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTaskList((prev) => prev.filter((item) => item.id !== id));
  };

  const checkTask = (id) => {
    setTaskList((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const reorderTask = (activeId, overId) => {
    setTaskList((prev) => {
      const activeIndex = prev.findIndex((item) => item.id === activeId);
      const overIndex = prev.findIndex((item) => item.id === overId);
      if (activeIndex === -1 || overIndex === -1) {
        return prev;
      }
      return arrayMove(prev, activeIndex, overIndex);
    });
  };

  const clearCompletedTask = (id) => {
    setTaskList((prev) => prev.filter((item) => !item.completed));
  };

  const filteredTasks = taskList.filter((task) => {
    if (currentFilter === "active") {
      return !task.completed;
    }
    if (currentFilter === "completed") {
      return task.completed;
    }
    return true;
  });

  return {
    taskList,
    currentFilter,
    filteredTasks,
    createdTodo,
    deleteTask,
    checkTask,
    reorderTask,
    clearCompletedTask,
    handleChangeFilter,
  };
};

export default useTodos;
