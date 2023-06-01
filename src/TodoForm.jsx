import { useState } from "react"
import PropTypes from "prop-types";
TodoForm.propTypes = {
    onSubmit: PropTypes.func
}

export function TodoForm({ onSubmit }){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        onSubmit(newItem)
    
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center gap-3" >

                <label htmlFor="new-item" className="text-2xl font-semibold">
                        New Item
                </label>

                <input value={newItem} onChange={ e => setNewItem(e.target.value)} 
                type="text" 
                id="new-item" 
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 w-3/4 p-2.5"
                required/>
                
                <button className=" w-1/2 p-2 rounded-lg bg-blue-400 font-sans font-semibold hover:bg-blue-600 ">Add</button>
                
        </form>
    )
}

