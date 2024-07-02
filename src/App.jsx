import TextBox from "./components/TodoTextbox";

export default function App(){
  

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