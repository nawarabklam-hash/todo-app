import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { TodosContext } from "./TodosContext";

const TodoDetails = () => {
  const { id } = useParams();
  const { todos } = useContext(TodosContext);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return <p className="text-center text-gray-400">Task not found 🤷</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">{todo.text}</h1>
      <p className="text-gray-500 mb-4">
        Status: {todo.done ? "Done ✅" : "Not done ⏳"}
      </p>
      <Link to="/" className="text-blue-500">← Back</Link>
    </div>
  );
};

export default TodoDetails;