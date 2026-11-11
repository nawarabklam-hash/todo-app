import { useContext } from "react";
import { Link } from "react-router-dom";
import { Info, Trash2 } from "lucide-react";
import { TodosContext } from "../context/TodosContext";

const TodoItem = ({ todo }) => {
  const { handleToggle, handleDelete } = useContext(TodosContext);

  return (
    <li className="flex justify-between items-center bg-gray-50 border p-3 rounded">
    <button
        onClick={() => handleToggle(todo.id)}
        className={todo.done ? "line-through text-gray-400" : ""}
      >
        {todo.text}
       </button>
      <div className="flex gap-2">
        <Link
          to={`/todo/${todo.id}`}
          aria-label="Task details"
          className="text-gray-400 hover:text-blue-500"
        >
          <Info size={20} />
        </Link>
        <button
          onClick={() => handleDelete(todo.id)}
          aria-label="Delete task"
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={20} className="transition hover:rotate-90" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;