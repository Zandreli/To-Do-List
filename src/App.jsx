import { useState } from "react";
import "./App.css";
function ToDoListItem({ task, description }) {
  return (
    <div className="to-do-tasks">
      <h6>{task}</h6>
      <p>{description}</p>
    </div>
  );
}
function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [toDoListItem, setToDoListitem] = useState([]);

  function handleChangeTask(ev) {
    setTask(ev.target.value);
  }

  function handleChangeDescription(ev) {
    setDescription(ev.target.value);
  }

  function handleAddTask(ev) {
    ev.preventDefault();
    if (!task || !description) {
      alert("All details are required to be filled")
      return;
    }
    const newTask = {
      task: task,
      description: description
    }
    setToDoListitem(function(prevToDoListItems) {
      return [...prevToDoListItems, newTask]
    });
    setTask("")
    setDescription("")
  }

  return (
    <div id="app">
      <h1 className="title">To-Do List App</h1>

      <form>
        <input
          type="text"
          placeholder="task"
          className="form-input"
          value={task}
          onChange={handleChangeTask}
        />
        <input
          type="text"
          placeholder="description"
          className="form-input"
          value={description}
          onChange={handleChangeDescription}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </form>

      <div>
        {
          toDoListItem.map((task, idx) => <ToDoListItem
          key={idx}
          task={task.task}
          description={task.description}
        />)
        }
      </div>
    </div>
  );
}

export default App;
