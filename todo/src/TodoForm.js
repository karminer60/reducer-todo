
import React, { useState, useReducer } from "react";
import { reducer, initialState } from './reducers/reducer.js';



const TodoForm = (props) => {
    // const [title, setTitle] = useState('Hello earthlings!');
    // const [editing, setEditing] = useState(false);
    const [newTodo, setNewToDo] = useState("");

    
    

    const handleChanges = e => {
        setNewToDo(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      props.dispatch({type: "ADD" , name:newTodo});
    };
   
        return (
            <form onSubmit={handleSubmit}>
              
              <input
                type="text"
                name="item"
                value={newTodo}
                onChange={handleChanges}
              />
              <button>Add</button>
            </form>
          );
};

export default TodoForm;