import { useState, useRef, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { TodosContext } from "./context/TodosContext";
import TodoItem from "./components/TodoItem";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Stats from "./pages/Stats";
import TodoDetails from "./pages/TodoDetails";

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", [
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build Todo App", done: false },
    { id: 3, text: "Push to GitHub", done: false },
  ]);
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text: text, done: false };
    setTodos([...todos, newTodo]);
    setText("");
    inputRef.current.focus();
  };

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

  const remaining = useMemo(() => {
    return todos.filter((todo) => !todo.done).length;
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, handleToggle, handleDelete }}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 p-8">

          <nav className="max-w-md mx-auto flex gap-4 mb-4">
            <Link to="/" className="text-blue-500 font-bold">Tasks</Link>
            <Link to="/stats" className="text-blue-500 font-bold">Stats</Link>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
                  <h1 className="text-3xl font-bold text-blue-500 mb-6">My Todo App</h1>
                  <p className="text-gray-500 mb-4">{remaining} tasks left</p>

                  <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                    <input
                      ref={inputRef}
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
                      <TodoItem key={todo.id} todo={todo} />
                    ))}
                  </ul>

                  {todos.length === 0 && (
                    <p className="text-gray-400 text-center">No tasks yet 🎉</p>
                  )}
                </div>
              }
            />
            <Route path="/stats" element={<Stats />} />
            <Route path="/todo/:id" element={<TodoDetails />} />
          </Routes>

        </div>
      </BrowserRouter>
    </TodosContext.Provider>
  );
};

export default App;