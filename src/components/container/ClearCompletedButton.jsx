

const ClearCompletedButton = ({ taskList = [], clearCompletedTask = () => {} }) => {
  const hasCompleted = taskList.some((task) => task.completed);
  return (
    <button 
      type="button" 
      className="text-sm text-purple-600 enabled:hover:text-purple-800 dark:enabled:hover:text-gray-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" 
      onClick={clearCompletedTask} 
      disabled={!hasCompleted}
    >
      Clear Completed
    </button>
  );
};

export default ClearCompletedButton;
