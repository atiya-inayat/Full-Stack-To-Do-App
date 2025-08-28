import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      }
    </>
  );
}

export default App;
