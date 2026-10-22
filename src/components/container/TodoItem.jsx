import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ task, deleteTask, checkTask }) => {
  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });
  const iconBaseUrl = import.meta.env.BASE_URL;

  return (
    <li className="flex items-center justify-between gap-4 p-4 group bg-white dark:bg-navy-900 cursor-grab select-none" ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }} {...listeners}>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label={task.text}
          aria-pressed={task.completed}
          className={`flex items-center justify-center w-6 h-6 aspect-square rounded-full border border-gray-600 ${!task.completed ? "hover:border-transparent dark:hover:bg-[linear-gradient(var(--color-navy-900),var(--color-navy-900)),var(--gradient-check)] hover:bg-[linear-gradient(white,white),var(--gradient-check)] hover:[background-clip:padding-box,border-box] hover:bg-origin-border" : ""} cursor-pointer ${task.completed ? "bg-(image:--gradient-check)" : "bg-transparent"}`}
          onClick={() => checkTask(task.id)}>
          {task.completed && <img className="w-3 h-3" src={`${iconBaseUrl}icon-check.svg`} alt="" />}
        </button>
        <p className={`${task.completed ? "line-through text-gray-300 dark:text-navy-850" : "text-navy-850 dark:text-purple-300"} cursor-pointer`} onClick={() => checkTask(task.id)}>
          {task.text}
        </p>
      </div>
      <button className="w-6 h-6 md:w-4 md:h-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-100 cursor-pointer md:focus-visible:opacity-100 md:focus-visible:outline-2 md:focus-visible:outline-navy-850" onClick={() => deleteTask(task.id)} aria-label={`Delete task: ${task.text}`}>
        <img src={`${iconBaseUrl}icon-cross.svg`} alt="" />
      </button>
    </li>
  );
};

export default TodoItem;
