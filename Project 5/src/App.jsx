import { useMemo, useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import FilterBar from './components/FilterBar.jsx';
import Stats from './components/Stats.jsx';
import Section from './components/Section.jsx';

const CATEGORIES = ['Work', 'Personal', 'Shopping', 'Health'];
const STATUS_FILTERS = ['All', 'Active', 'Completed'];

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text, category) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((currentTodos) => [
      {
        id: crypto.randomUUID(),
        text: trimmedText,
        category,
        completed: false,
      },
      ...currentTodos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') {
      return todos.filter((todo) => !todo.completed);
    }

    if (filter === 'Completed') {
      return todos.filter((todo) => todo.completed);
    }

    if (CATEGORIES.includes(filter)) {
      return todos.filter((todo) => todo.category === filter);
    }

    return todos;
  }, [filter, todos]);

  return (
    <main className="app-shell">
      <div className="app-header">
        <h1>Personal To-Do List</h1>
      </div>

      <div className="app-grid">
        <div className="primary-column">
          <Section title="Add a Task">
            <TodoForm categories={CATEGORIES} onAdd={addTodo} />
          </Section>

          <Section title="Filters">
            <FilterBar
              categories={CATEGORIES}
              filter={filter}
              onFilterChange={setFilter}
              statusFilters={STATUS_FILTERS}
            />
          </Section>

          <Section title="Tasks">
            <TodoList
              filter={filter}
              todos={filteredTodos}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          </Section>
        </div>

        <aside>
          <Section title="Statistics">
            <Stats categories={CATEGORIES} todos={todos} />
          </Section>
        </aside>
      </div>
    </main>
  );
}

export default App;
