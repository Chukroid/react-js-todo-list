import TodoListCategory from "./TodoListCategory"

export default function TodoList({ todos, allTags, ...rest }){

    if (todos.length === 0){
        return <p className="empty-text">You currently have no Todos To do.</p>
    }else{
        return (
            <>
            {todos.length === 0 && ""}
            {Object.entries(allTags).map( ([key,value]) => {
                return (
                    <TodoListCategory tagvalue={value} key={key} tablekey={key} todos={todos} restf={rest} />
                )
            })}
            </>
        )
    }
}