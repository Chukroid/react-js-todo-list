export default function TodoItem({ todoitem, otherfuncs }){
    const checkboxid = "checkbox-"+todoitem.id

    return (
        <>
        <li key={todoitem.id} className="todo-item"> {/* every iteration must have a key */}
            <div className="item-info">
                <input id={checkboxid} type="checkbox" checked={todoitem.completed || false} onChange={e => otherfuncs.toggletodo(todoitem.id,e.target.checked)}/>
                <label className="todo-completed" htmlFor={checkboxid}><i className="bi bi-check"></i>                </label>
                <label className={"todo-title" + (todoitem.completed && " striked" || "")}>{todoitem.title || "Invalid Title"}</label>
                <button className="todo-delete"
                    onClick={() => otherfuncs.deletetodo(todoitem.id)}
                ><i className="bi bi-trash-fill"></i></button>
            </div>
        </li>
        </>
    )
}