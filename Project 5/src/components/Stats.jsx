function Stats({ categories, todos }) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;

  const categoryCounts = categories.map((category) => ({
    category,
    count: todos.filter((todo) => todo.category === category).length,
  }));

  return (
    <div className="stats">
      <div className="stats-grid">
        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
        <div>
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>
        <div>
          <span>Active</span>
          <strong>{active}</strong>
        </div>
      </div>

      <div className="category-stats">
        <h3>By category</h3>
        {categoryCounts.map(({ category, count }) => (
          <div className="category-row" key={category}>
            <span>{category}</span>
            <strong>{count}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
