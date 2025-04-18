import React, { useState } from 'react';
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [todo, setTodo] = useState(["Sample"]);
  let [newTodo, setNew] = useState("");

  let addNewTask = () => {
      setTodo([...todo, newTodo]);
      setNew("")
  };

  let updateTodoValue = (event) => {
    setNew(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Enter Your task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todo.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
