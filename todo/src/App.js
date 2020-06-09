import React, { useState, useReducer } from "react";
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm.js';
import { reducer, initialState } from './reducers/reducer.js';

function App() {

  const [thingsToDo, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoForm  dispatch={dispatch}/>
      
    </div>
  );
}

export default App;
