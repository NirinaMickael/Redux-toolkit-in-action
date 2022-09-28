import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import TaskList from "./features/todo/taskList";
import AddTask from "./features/todo/addTask";
function App() {
  const tasks = useSelector((state: RootState) => state.todo);
  return (
    <div className="app">
      <main>
        <div className="header">
          <h1>TODO-LIST</h1>
        </div>
        <div className="container">
          <AddTask />
          <TaskList />
        </div>
        <div className="task-count">
          <small> done {tasks.filter((e) => e.done).length} </small>
        </div>
      </main>
    </div>
  );
}

export default App;
