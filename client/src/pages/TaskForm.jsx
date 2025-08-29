import React from "react";
import { useTasks } from "../context/TaskContext";
import { useState } from "react";

const TaskForm = () => {
  const { createTask, updateTask, getTasks } = useTasks();
  const [taskTile, setTaskTitle] = useState();
  const [taskDesc, setTaskDesc] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    setTaskTitle(inputValue);
  };
  const handleTextarea = (e) => {
    const textAreaValue = e.target.value;
    console.log(textAreaValue);
    setTaskDesc(textAreaValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={taskTile}
          onChange={handleInput}
        />

        <textarea
          name=""
          id=""
          value={taskDesc}
          placeholder="Descipcript"
          onChange={handleTextarea}
        ></textarea>
        <button onClick={createTask}>Create</button>
      </form>
      <button onClick={() => updateTask()}>Update</button>
      <button onClick={() => getTasks()}>All Tasks</button>
    </div>
  );
};

export default TaskForm;
