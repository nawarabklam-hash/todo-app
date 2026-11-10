import { useContext } from "react";
import { TodosContext } from "./TodosContext";

const TodoItem = ({ todo }) => {
  const { handleToggle, handleDelete } = useContext(TodosContext);

  return (
       <li
            
              className="flex justify-between items-center bg-gray-50 border p-3 rounded"
            >
              <span
                onClick={() => handleToggle(todo.id)}
                className={todo.done ? "line-through text-gray-400" : ""}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
  );
};

export default TodoItem;