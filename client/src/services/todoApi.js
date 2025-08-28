import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URI;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/tasks`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data.length === 0 ? (
        <p>No Task Yet</p>
      ) : (
        <ul>
          {data.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
