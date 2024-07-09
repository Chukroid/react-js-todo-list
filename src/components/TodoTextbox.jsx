import { useState } from "react"

export default function TodoTextBox({ onSubmit }){
    const [newitem,setNewItem] = useState("") //gets the newitem which is the input text and the setnewitem function to be called to set the value of newitem to the new one

    function handlesubmit(e){ // replaces the default form submitting action
        e.preventDefault()
        if (newitem === "") return 

        onSubmit(newitem)

        setNewItem("")
    }

    return(
        <>
        <form onSubmit={handlesubmit} className="form-wrapper">
            {/*setting the value of the textbox to newitem and setting its change event to the setnewitem function */}
            <div className="todo-form-description">
                <i class="bi bi-body-text"></i>
                <input placeholder="Add a new Todo..." type="text" id="item" value={newitem} onChange={e => setNewItem(e.target.value)}/>
            </div>
            <button>ADD TODO</button>
        </form>
        </>
    )
}