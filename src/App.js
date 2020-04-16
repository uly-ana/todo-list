import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from "./Components/TodoList";

 class App extends Component {
  render() {
    return (
      <div>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}

export default App;
