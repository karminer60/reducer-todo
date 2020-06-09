import React from 'react';

const Todo = props => {
  return (
    <div 
    onClick={() => dispatch({ type: "TOGGLE" })}
    className={`item${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;