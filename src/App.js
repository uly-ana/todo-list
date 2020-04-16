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
       <div className="container">
         <div className="row">
           <div className="col-10.mx-auto.col-md-8.mt-4">
             <h3 className="text-capitalize text-center">Todo Input</h3>
             <TodoInput item={this.state.item} handleChange={this.handleChange} 
             handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
             <TodoList item={this.state.items} clearList={this.clearList}
             handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
           </div>
         </div>
       </div>
     );
   }
 }

export default App;
