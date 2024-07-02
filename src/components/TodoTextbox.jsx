export default function TodoTextBox(){
    return(
        <>
        <form >
            <label htmlFor="item">Add new Todo</label>
            <input type="text" id="item" />
            <button>ADD</button>
        </form>
        </>
    )
}