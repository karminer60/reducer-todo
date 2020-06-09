import React from 'react';

import Todo from './Todo.js';


const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="toDo-list">
      {props.thingsToDo.map(item => (
        <Todo key={item.id} item={item} dispatch={props.dispatch} />
      ))}
      
      <button className="clear-btn" onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;