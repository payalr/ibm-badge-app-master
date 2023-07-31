import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {taskList.map((taskItem, index) => (
          <li key={index}>{taskItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
