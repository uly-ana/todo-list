import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from "./Components/TodoList";

 class App extends Component {
   state = {
     items: [
       {
         id: 1,
         title: "wake up",
       },
       {
         id: 2,
         title: "coding",
       },
       {
         id: 3,
         title: "read book",
       },
     ],
     id: uuidv4(),
     item: "",
     editItem: false,
   };

   handleChange = (e) => {
     console.log("handle change");
   };
   handleSubmit = (e) => {
     console.log("handle submit");
   };
   clearList = () => {
     console.log("clear list");
   };
   handleDelete = (id) => {
     console.log(`handle edit ${id}`);
   };

   handleEdit = (id) => {
     console.log(`edit edit ${id}`);
   };

   render() {
     return (
       <div>
         <TodoInput />
         <TodoList />
       </div>
     );
   }
 }

export default App;
