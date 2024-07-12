import { useState } from "react"

export default function TodoTextBox({ onSubmit, allTags }){
    const [newitem,setNewItem] = useState("") //gets the newitem which is the input text and the setnewitem function to be called to set the value of newitem to the new one
    const [newtag,setNewTag] = useState("personal")

    function handlesubmit(e){ // replaces the default form submitting action
        e.preventDefault()
        if (newitem === "") return 

        onSubmit(newitem,newtag)

        setNewItem("")
    }

    return(
        <>
        <form onSubmit={handlesubmit} className="form-wrapper">
            {/*setting the value of the textbox to newitem and setting its change event to the setnewitem function */}
            <div className="top-part">
                <div className="todo-form-description">
                    <i className="bi bi-body-text"></i>
                    <input placeholder="Add a new Todo..." autoComplete="off" type="text" id="item" value={newitem} onChange={e => setNewItem(e.target.value)}/>
                </div>
                <select name="tags" id="tag-select" defaultValue={newtag} onChange={e => setNewTag(e.target.value)} required>
                    {allTags.map(tag => {
                        return (
                            <option value={tag.value} key={tag.value}>{tag.Text}</option>
                        )
                    })}
                </select>
            </div>
            <button>ADD TODO</button>
        </form>
        </>
    )
}