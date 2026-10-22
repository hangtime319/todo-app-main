const ItemsCounter = ({taskList}) => {
  const remainingTasks = taskList.filter((task) => !task.completed);
  return (
    <span className="text-sm text-gray-600 dark:text-purple-600">
      {remainingTasks.length} {remainingTasks.length <= 1 ? 'item left' : 'items left'}
    </span>
  )
}

export default ItemsCounter