import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build Todo App",done: false  },
    { id: 3, text: "Push to GitHub" ,done: false },
  ]);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
const newTodo = { id: Date.now(), text: text, done: false };
    setTodos([...todos, newTodo]);
    setText("");
  };

  // NEW: delete one todo by its id
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggle = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">My Todo App</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            className="flex-1 border border-gray-300 p-2 rounded"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </form>

        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 border p-3 rounded"
            >
              <span
  onClick={() => handleToggle(todo.id)}
  className={todo.done ? "line-through text-gray-400" : ""}
>
  {todo.text}
</span>
              {/* NEW: delete button */}
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && <p className="text-gray-400 text-center">No tasks yet 🎉</p>}
      </div>
    </div>
  );
};

export default App;