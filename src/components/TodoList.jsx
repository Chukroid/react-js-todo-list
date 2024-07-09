import TodoItem from "./TodoItem"

export default function TodoList({ todos, ...rest }){
    return (
        <>
        <ul className="todo-list">
            {todos.map(todo => { // function used to iterate in the todos, since todos is an array
                return (
                    <TodoItem todoitem={todo} key={todo.id} otherfuncs={rest}/>
                )
            })}
        </ul>
        </>
    )
}