import ItemsCounter from "./ItemsCounter";
import Filters from "./Filters";
import ClearCompletedButton from "./ClearCompletedButton";

const ListFooter = ({ taskList, currentFilter, handleChangeFilter, clearCompletedTask }) => {
  return (
    <section className="flex items-center justify-between gap-4 p-4 border-t border-gray-300 dark:border-navy-850">
      <ItemsCounter taskList={taskList} />
      <div className="hidden md:block">
      <Filters currentFilter={currentFilter} 
      handleChangeFilter={handleChangeFilter} />
      </div>
      
      <ClearCompletedButton clearCompletedTask={clearCompletedTask} taskList={taskList} />
    </section>
  );
};

export default ListFooter;
