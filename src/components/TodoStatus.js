import React from 'react';

const TodoStatus = ({ group, status }) => {
  return (
    <div className="todo-status-group">
      <h3 className="group-title">{group}</h3>
      <ul className="status-list">
        {status.map((todo) => (
          <li key={todo.id} className={`status-item ${todo.completed ? 'done' : 'not-done'}`}>
            Group {todo.id}: {todo.completed ? 'Done' : 'Not Done'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoStatus;