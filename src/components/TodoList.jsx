import TodoListCategory from "./TodoListCategory"

export default function TodoList({ todos, allTags, ...rest }){
    return (
        <>
        {allTags.map(tag => {
            return (
                <TodoListCategory tagvalue={tag} key={tag.value} todos={todos} restf={rest} />
            )
        })}
        </>
    )
}