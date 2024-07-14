import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../Redux/todoSlice";

const TodoRedux = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div>
      <h1>TodoRedux</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoRedux;
