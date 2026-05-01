import Button from './Button.jsx';

function FilterBar({ categories, filter, onFilterChange, statusFilters }) {
  const filters = [...statusFilters, ...categories];

  return (
    <div className="filter-bar" aria-label="Task filters">
      {filters.map((filterName) => (
        <Button
          className={filter === filterName ? 'is-active' : ''}
          key={filterName}
          onClick={() => onFilterChange(filterName)}
          variant={filter === filterName ? 'primary' : 'secondary'}
        >
          {filterName}
        </Button>
      ))}
    </div>
  );
}

export default FilterBar;
