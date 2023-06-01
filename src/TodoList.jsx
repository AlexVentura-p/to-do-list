import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
      <>
        <div className="font-sans font-medium text-xl">
            {todos.length === 0 && "No todos"}
        </div>
        <ul className="">
          
        {todos.map(todo => {
          return (
            <TodoItem 
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
      </>
    );
}