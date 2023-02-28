import React, { useState } from 'react';
import './Main.css';

function Main() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "feed the cows" },
    { id: 2, text: "go buy groceries" },
    { id: 3, text: "attend choir practice" }
  ]);

  function handleDelete(taskId) {
    setTasks(tasks.filter(function(task) {
      return task.id !== taskId;
    }));
  }

  return (
    <div className="Main">
      <div className="container">
        <div className="box"> 
          <h2>Welcome Back!</h2>
          <button>Add</button>
        </div>
        <ul>
          {tasks.map(function(task) {
            return (
              <li key={task.id}>
                <input type="checkbox" id={task.id} />
                {task.text}
                <button onClick={function() { handleDelete(task.id) }}>delete</button>
                <button>edit</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
