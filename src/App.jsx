import { useEffect, useState } from "react";
import TodoTextBox from "./components/TodoTextbox";
import TodoList from "./components/TodoList";

export default function App(){
  const [todolist,setTodo] = useState(() => {
    const storagevalue = localStorage.getItem("Todos")
    if (storagevalue == null) return []
    return JSON.parse(storagevalue)
  }) //gets the todolist which is the input text and the setnewitem function to be called to set it
  const tagList = {
    "personal": {TagIconClass:"bi bi-person-fill",TagText:"Personal"},
    "work": {TagIconClass:"bi bi-briefcase-fill",TagText:"Work"},
    "school": {TagIconClass:"bi bi-mortarboard-fill",TagText:"School"},
    "hobby": {TagIconClass:"bi bi-palette-fill",TagText:"Hobby"},
  }


  useEffect(() => { // anytime the todolist updates, it should automatically update the local storage 
    localStorage.setItem("Todos", JSON.stringify(todolist))
  },[todolist])// the second argument is an array of all the objects we want the useeffect to detect changes on


  function addTodo(titleval, tagval){
    setTodo(currentTodos => {
      return [
        ...currentTodos, //create a copy of todo
        {id: crypto.randomUUID(), title: titleval, completed: false, tag: tagval}
      ]
    })
  }

  function toggletodo(id, completed){
    setTodo(currentTodos => {// since the todolist cant be changed, we need to re-setTodo with the new value
      return currentTodos.map(todo => { // .map returns an array, so we basically gonna loop through each item in the currentTodos and replace their position with something or return something
        if(todo.id === id){
          // here after our condition, if it meets the condition, we return the todo(which is a dictionary)
          // remember we cant change the value directly so we must have to take the aproach above
          return {...todo, completed} // here the second parameter is the key we want to change
        }

        return todo
      })
    })
  }

  function deletetodo(id){
    setTodo(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id) // it will only allow todos that their ids are different from the current id
    })
  }


  return (
    <>
    <h1 className="creator">Made by Chukroid</h1>
    <div className="main-wrapper">
      <TodoTextBox onSubmit={addTodo} allTags={tagList}/> {/* sends the addTodo function to the components, this are known as prompts */}
      <div className="line"></div>
      <TodoList todos={todolist} allTags={tagList} toggletodo={toggletodo} deletetodo={deletetodo}/>
    </div>
    </>
  )
}