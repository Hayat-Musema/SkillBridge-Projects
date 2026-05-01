import TodoItem from './TodoItem.jsx';

function TodoList({ filter, todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return (
      <p className="empty-state">
        No tasks match the <strong>{filter}</strong> filter.
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
