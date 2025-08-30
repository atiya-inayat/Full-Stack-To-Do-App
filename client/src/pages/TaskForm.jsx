import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { tasks, createTask, updateTask, getTasks } = useTasks();

  // States for form (used for both create and edit)
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  // Track whether we are editing
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTaskId) {
      // Update existing task
      updateTask(editingTaskId, {
        title: taskTitle,
        description: taskDesc,
      });
      setEditingTaskId(null); // exit edit mode
    } else {
      // Create new task
      createTask({
        title: taskTitle,
        description: taskDesc,
      });
    }

    // reset form
    setTaskTitle("");
    setTaskDesc("");
  };

  // Load task values into form when clicking "Edit"
  const handleEdit = (task) => {
    setEditingTaskId(task._id);
    setTaskTitle(task.title);
    setTaskDesc(task.description);
  };

  return (
    <div>
      {/* Create / Edit Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <textarea
          value={taskDesc}
          placeholder="Description"
          onChange={(e) => setTaskDesc(e.target.value)}
        ></textarea>

        <button type="submit">{editingTaskId ? "Update" : "Create"}</button>
        {editingTaskId && (
          <button
            type="button"
            onClick={() => {
              setEditingTaskId(null);
              setTaskTitle("");
              setTaskDesc("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <button onClick={() => getTasks()}>All Tasks</button>

      {/* Task List */}
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <strong>{task.title}</strong>: {task.description}
              <button onClick={() => handleEdit(task)}>Edit</button>
            </li>
          ))
        ) : (
          <p>No Task yet</p>
        )}
      </ul>
    </div>
  );
};

export default TaskForm;
