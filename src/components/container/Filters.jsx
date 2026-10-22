

const Filters = ({currentFilter, handleChangeFilter = () => {}}) => {
  const filters = ["all", "active", "completed"];
  return (
    <nav className="flex items-center justify-center gap-2 ">
      {filters.map((filter) => (
        <button
        type="button"
          key={filter}
          aria-current={currentFilter === filter ? true : undefined}
          className={`px-1 text-sm capitalize font-semibold cursor-pointer ${
            currentFilter === filter
              ? "text-blue-500"
              : "text-gray-600 hover:text-navy-900 dark:hover:text-gray-50"
          }`}
          onClick={() => handleChangeFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </nav>
  );
};

export default Filters;
