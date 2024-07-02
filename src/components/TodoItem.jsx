export default function TodoItem({ todoitem, otherfuncs }){
    return (
        <>
        <li key={todoitem.id}> {/* every iteration must have a key */}
            <label>{todoitem.title || "Invalid Title"}</label>
            <input type="checkbox" checked={todoitem.completed || false} onChange={e => otherfuncs.toggletodo(todoitem.id,e.target.checked)}/>
            <button>Delete</button>
        </li>
        </>
    )
}