import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/taskform" element={<TaskForm />} />
        </Routes>
      }
    </>
  );
}

export default App;
