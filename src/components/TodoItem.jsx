import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodosContext } from "../context/TodosContext";

const TodoItem = ({ todo }) => {
  const { handleToggle, handleDelete } = useContext(TodosContext);

  return (
    <li className="flex justify-between items-center bg-gray-50 border p-3 rounded">
      <span
        onClick={() => handleToggle(todo.id)}
        className={todo.done ? "line-through text-gray-400" : ""}
      >
        {todo.text}
      </span>
      <div className="flex gap-2">
        <Link to={`/todo/${todo.id}`} className="text-gray-400 hover:text-blue-500">
          ℹ️
        </Link>
        <button
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </li>
  );
};

export default TodoItem;