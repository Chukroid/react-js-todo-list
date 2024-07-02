import { useEffect, useState } from "react";
import TextBox from "./components/TodoTextbox";

export default function App(){
  const [todolist,setNewItem] = useState(() => {
    const storagevalue = localStorage.getItem("Todos")
    if (storagevalue == null) return []
    return JSON.parse(storagevalue)
  }) //gets the todolist which is the input text and the setnewitem function to be called to set it


  useEffect(() => { // anytime the todolist updates, it should automatically update the local storage 
    localStorage.setItem("Todos", JSON.stringify(todolist))
  },[todolist])// the second argument is an array of all the objects we want the useeffect to detect changes on


  return (
    <>
    <h1>Your Todo List</h1>
    <TextBox/>
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