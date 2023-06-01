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
        <form onSubmit={handleSubmit} className="new-item-form" >
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={ e => setNewItem(e.target.value)} 
                type="text" 
                id="item" required/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}

