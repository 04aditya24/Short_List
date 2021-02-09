import React, {useState} from "react";
import TodoItem from "./Todolist";
import InputArea from "./InputArea";


function App() {

 
  const [items,setItems]=useState([]);

 


  function Additems(input){
    setItems(preValue=>{
      return [...preValue,input];
    });
    
  
  }

  function Delete(id){
    setItems(preValue=>{
      return preValue.filter((item,index)=>{
        return index !==id;
      })

    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={Additems} />
      <div>
        <ul>
         {items.map((todoitems,index)=>
         <TodoItem item={todoitems}
         onChecked={Delete}
         key={index}
         id={index} 
         
          />
         )
         }
        </ul>
      </div>
    </div>
  );
}

export default App;
