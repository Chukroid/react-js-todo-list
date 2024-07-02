export default function TodoList({ todos }){
    return (
        <>
        <ul>
            {todos.map(todo => { // function used to iterate in the todos, since todos is an array
                return (
                    <li key={todo.id}> {/* every iteration must have a key */}
                        <label>{todo.title || "Invalid Title"}</label>
                        <input type="checkbox" checked={todo.completed || false}/>
                        <button>Delete</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}