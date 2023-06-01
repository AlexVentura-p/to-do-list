import PropTypes from "prop-types";

TodoItem.propTypes = {
    completed: PropTypes.bool,
    id: PropTypes.any,
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}

export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (
        <li className=" mt-5 grid grid-cols-3">
          <div className="col-span-2 "> 
            <input id={id} type="checkbox" 
              className=" outline-none mr-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)} 
              />
            <label htmlFor={id} className="ml-2 font-sans font-medium text-lg  break-words">
              {title}
            </label>
          </div>
              
              <button 
              onClick={() => deleteTodo(id)} 
              className=" h-fit w-fit ml-5 font-sans border-2 font-semibold rounded-lg py-2 px-4 bg-red-400 hover:bg-red-600">Delete</button>
            </li>
    );
}