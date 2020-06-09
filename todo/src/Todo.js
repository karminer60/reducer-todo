import React from 'react';

const Todo = props => {
  return (
    <div 
    onClick={() => dispatch({ type: "TOGGLE" })}
    className={`item${props.name ? ' completed' : ''}`}>
      <p>{props.name}</p>
    </div>
  );
};

export default Todo;