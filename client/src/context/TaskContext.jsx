import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URI;

  //   fetch all task
  const getTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Add new Task
  const createTask = async (task) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);
      setTasks((prev) => {
        return [...prev, response.data]; // update state
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks((prev) => {
        return prev.filter((t) => t._id !== id);
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // update Task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.patch(`${API_URL}/tasks/${id}`, updatedTask);
      setTasks((prev) => {
        return prev.map((t) => (t._id === id ? response.data : t));
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // fetch task on mount
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, error, getTasks, createTask, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// custom hook for easier usage
export const useTasks = () => useContext(TaskContext);
