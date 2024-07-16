import TodoItem from "./TodoItem"

export default function TodoListCategory({ tagvalue, tablekey, todos, restf }){
    let newtodos;
    
    if (tablekey === "personal"){
        newtodos = todos.filter(ftodo => ftodo.tag == null || ftodo.tag === tablekey)
    }else{
        newtodos = todos.filter(ftodo => ftodo.tag === tablekey)
    }

    if (newtodos.length > 0){
        return (

            <>
            <ul className="todo-list" key={tablekey}>
                    <p><i className={tagvalue.TagIconClass}></i>{tagvalue.TagText}</p>
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