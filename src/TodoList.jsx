import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
        {todos.length === 0 && "No todos"}
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
    );
}