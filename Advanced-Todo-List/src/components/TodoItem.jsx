// TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const { id, text, completed } = todo;

  return (
    <li type="none">
      <input type="checkbox" checked={completed} onChange={() => toggleComplete(id)} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <button id="delete" onClick={() => deleteTodo(id)}>❌</button>
    </li>
  );
};

export default TodoItem;
