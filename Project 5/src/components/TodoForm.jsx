import { useState } from 'react';
import Button from './Button.jsx';

function TodoForm({ categories, onAdd }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text.trim()) {
      setError('Please enter a task name.');
      return;
    }

    onAdd(text, category);
    setText('');
    setCategory(categories[0]);
    setError('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        <span>Task name</span>
        <input
          onChange={(event) => {
            setText(event.target.value);
            if (error) setError('');
          }}
          placeholder="Plan weekly groceries"
          type="text"
          value={text}
        />
      </label>

      <label>
        <span>Category</span>
        <select
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          {categories.map((categoryName) => (
            <option key={categoryName} value={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
      </label>

      <Button type="submit" variant="primary">
        Add Task
      </Button>

      {error && <p className="form-error">{error}</p>}
    </form>
  );
}

export default TodoForm;
