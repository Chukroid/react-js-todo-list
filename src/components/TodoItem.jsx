export default function TodoItem({ todoitem, otherfuncs }){
    return (
        <>
        <li key={todoitem.id} className="todo-item"> {/* every iteration must have a key */}
            <div className="item-info">
                <input className="todo-completed" type="checkbox" checked={todoitem.completed || false} onChange={e => otherfuncs.toggletodo(todoitem.id,e.target.checked)}/>
                <label className={todoitem.completed && "striked" || ""}>{todoitem.title || "Invalid Title"}</label>
                <button className="todo-delete"
                    onClick={() => otherfuncs.deletetodo(todoitem.id)}
                ><i className="bi bi-trash-fill"></i></button>
            </div>
        </li>
        </>
    )
}