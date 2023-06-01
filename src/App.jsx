import { useEffect, useState } from "react"
//import "./styles.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos( (currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="flex justify-center">
      <div className=" bg-white shadow-2xl rounded-2xl w-1/2 p-10 h-fit">
        <TodoForm onSubmit={addTodo} />
        <h1 className="m-5 text-lg font-extrabold leading-none tracking-tight md:text-xl lg:text-2xl">Todo List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}