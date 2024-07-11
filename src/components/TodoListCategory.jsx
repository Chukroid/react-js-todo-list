import TodoItem from "./TodoItem"

export default function TodoListCategory({ tagvalue, todos, restf }){
    let newtodos;
    
    if (tagvalue.value === "personal"){
        newtodos = todos.filter(ftodo => ftodo.tag == null || ftodo.tag === tagvalue.value)
    }else{
        newtodos = todos.filter(ftodo => ftodo.tag === tagvalue.value)
    }

    if (newtodos.length > 0){
        return (

            <>
            <ul className="todo-list" key={tagvalue.value}>
                    <p>{tagvalue.Text}</p>
                    {
                        newtodos.map(todo => { // function used to iterate in the todos, since todos is an array
                            return (
                                <TodoItem todoitem={todo} key={todo.id} otherfuncs={restf}/>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}