import { useRef, useState } from "react"

export default function CustomSelect({ list,startingVal,setTag }){
    const customselectref = useRef(null)
    const [selecting,setselection] = useState(true)

    function setNewTag(e,key){
        e.preventDefault()
        setselection(false)
        setTag(key)
    }

    document.addEventListener('click', e => {
        if( (e.target && customselectref.current) && (customselectref.current.contains(e.target) || customselectref.current === e.target)) return

        if(customselectref.current){
            customselectref.current.classList.remove('custom-select-active')
        }
    })

    return (
        <div ref={customselectref} className="custom-select" onClick={e => {
            if(selecting===true){
                customselectref.current.classList.toggle('custom-select-active')
            }else{
                customselectref.current.classList.remove('custom-select-active')
                setselection(true)
            }
            setselection(true)
        }}>
            <div className="custom-select-main">
                <i className={startingVal.TagIconClass}></i>
                <label>{startingVal.TagText}</label>
            </div>
            <i className="bi bi-caret-down-fill"></i>
            <div className="custom-select-list">
                {Object.entries(list).map( ([key,value]) => {
                    return (
                        <a key={key} href="" onClick={(e) => setNewTag(e,key)}>
                            <i className={value.TagIconClass}></i>
                            <label>{value.TagText}</label>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}