import React, { useState, useReducer } from "react";
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm.js';
import { reducer, initialState } from './reducers/reducer.js';
import TodoList from "./TodoList";

function App() {

  const [thingsToDo, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoForm  dispatch={dispatch}/>
      <TodoList dispatch={dispatch} thingsToDo={thingsToDo}/>
      
    </div>
  );
}

export default App;
