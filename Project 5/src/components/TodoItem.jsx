import Button from './Button.jsx';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? 'is-complete' : ''}`.trim()}>
      <label className="todo-check">
        <input
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          type="checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </label>

      <span className={`category-badge category-${todo.category.toLowerCase()}`}>
        {todo.category}
      </span>

      <Button onClick={() => onDelete(todo.id)} variant="danger">
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
