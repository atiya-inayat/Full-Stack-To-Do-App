import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {" "}
            {task.title}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
