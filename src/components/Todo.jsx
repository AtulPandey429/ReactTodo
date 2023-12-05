import React, { useState } from "react";

const Todo = () => {
   const [todo, settodo] = useState([]);
   const [newtodo, setnewtodo] = useState('');

   const handleAdd =()=>{
    if(newtodo.trim()!=''){
    settodo([newtodo,...todo]);
    console.log(todo);
    setnewtodo('')
}
   }
const handleinput=(e)=>{
    setnewtodo(e.target.value)
}
const handledelet=(index)=>{
    const updatedtodo = todo.filter((_,i)=> i !== index);
    settodo(updatedtodo);
    console.log(todo)
}

  return <div>
    
    <h1>Todo-App</h1>
    <div className="container">
        <input type="text" name="todo" value={newtodo} id="todo" onChange={handleinput} />
        <button onClick={handleAdd}>Add</button>
    </div>
    <div className="container1">
     {todo.map((e,i)=>{
        return <li key={i}>{e} 
        <button onClick={()=>handledelet(i)} >delete</button>
        </li>   })}
    </div>


  </div>;
};

export default Todo;
