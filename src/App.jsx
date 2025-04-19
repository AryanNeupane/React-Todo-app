import React, { useState } from 'react';
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [todo, setTodo] = useState([{task:"Sample",id :uuidv4()}]);
  let [newTodo, setNew] = useState("");

  let addNewTask = () => {
      setTodo((prevTodos)=>{
        return [...prevTodos, {task:newTodo,id:uuidv4()}]
      });
      setNew("")
  };

  let deleteTodo=(id)=>{
    setTodo(todo.filter((item)=>item.id!=id));

  }

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
        {todo.map((todos)=>(
          <li key={todos.id}> 
          <span>{todos.task}</span> 
          &nbsp;&nbsp;
          <button onClick={()=>deleteTodo(todos.id)}>Delete</button>
          </li>
        )

        )}
      </ul>
    </div>
  );
}

export default App;
