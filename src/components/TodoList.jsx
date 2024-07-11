import TodoListCategory from "./TodoListCategory"

export default function TodoList({ todos, allTags, ...rest }){

    if (todos.length === 0){
        return <p className="empty-text">You currently have no Todos To do.</p>
    }else{
        return (
            <>
            {todos.length === 0 && ""}
            {allTags.map(tag => {
                return (
                    <TodoListCategory tagvalue={tag} key={tag.value} todos={todos} restf={rest} />
                )
            })}
            </>
        )
    }
}