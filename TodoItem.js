import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => completeTodo(index)}>{todo.isCompleted ? 'Undo' : 'Complete'}</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
