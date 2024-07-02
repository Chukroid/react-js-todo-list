import { useEffect, useState } from "react";
import TodoTextBox from "./components/TodoTextbox";

export default function App(){
  const [todolist,setTodo] = useState(() => {
    const storagevalue = localStorage.getItem("Todos")
    if (storagevalue == null) return []
    return JSON.parse(storagevalue)
  }) //gets the todolist which is the input text and the setnewitem function to be called to set it


  useEffect(() => { // anytime the todolist updates, it should automatically update the local storage 
    localStorage.setItem("Todos", JSON.stringify(todolist))
  },[todolist])// the second argument is an array of all the objects we want the useeffect to detect changes on


  function addTodo(title){
    setTodo(currentTodos => {
      return [
        ...currentTodos, //create a copy of todo
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }


  return (
    <>
    <h1>Your Todo List</h1>
    <TodoTextBox onSubmit={addTodo}/> {/* sends the addTodo function to the components, this are known as prompts */}
    <ul>
      <li>
        <label>TODO Name</label>
        <input type="checkbox"/>
        <button>Delete</button>
      </li>
      <li>
        <label>TODO Name</label>
        <input type="checkbox"/>
        <button>Delete</button>
      </li>
      <li>
        <label>TODO Name</label>
        <input type="checkbox"/>
        <button>Delete</button>
      </li>
    </ul>
    </>
  )
}