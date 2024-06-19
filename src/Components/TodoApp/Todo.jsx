import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <div className="Todocon">
      <div className="header">Todo App</div>
      <div className="addtsk">
        <Addtask addTask={addTask} />
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <List task={task} removeTask={removeTask} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

const List = ({ task, index, removeTask }) => {
  return (
    <div className="listtask">
      {task.title}
      <button onClick={() => removeTask(index)} className="dltbtn">
        Delete
      </button>
    </div>
  );
};

const Addtask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.trim() !== "") {
      addTask(value);
      setValue("");
    } else {
      alert("Please enter a task!");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem} className="Addbtn">
        ADD
      </button>
    </div>
  );
};

export default Todo;
