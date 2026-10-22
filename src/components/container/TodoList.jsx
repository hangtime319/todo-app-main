import TodoItem from "./TodoItem";
import { DndContext, useSensor, useSensors, closestCenter, TouchSensor, MouseSensor } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const TodoList = ({ taskList, deleteTask, checkTask, reorderTask }) => {
  const sensorMouse = useSensor(MouseSensor, { activationConstraint: { distance: 8 } });
  const sensorTouch = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } });
  const sensors = useSensors(sensorMouse, sensorTouch);
  const handleDragEnd = (e) => {
    if (e.over && e.active.id !== e.over.id) {
      reorderTask(e.active.id, e.over.id);
    }
  };

  return (
    <section>
      <DndContext collisionDetection={closestCenter} sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={taskList.map((task) => task.id)} strategy={verticalListSortingStrategy}>
          <ul className="divide-y divide-gray-300 dark:divide-navy-850">
            {taskList.map((task) => (
              <TodoItem key={task.id} task={task} deleteTask={deleteTask} checkTask={checkTask} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </section>
  );
};

export default TodoList;
