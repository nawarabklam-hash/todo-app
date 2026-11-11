import { useContext } from "react";
import { TodosContext } from "./TodosContext";

const Stats = () => {
  const { todos } = useContext(TodosContext);

  const total = todos.length;
  const doneCount = todos.filter((todo) => todo.done).length;
  const remaining = total - doneCount;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Stats</h1>
      <ul className="flex flex-col gap-2 text-gray-700">
        <li>Total tasks: {total}</li>
        <li>Done: {doneCount} ✅</li>
        <li>Remaining: {remaining} ⏳</li>
      </ul>
    </div>
  );
};

export default Stats;