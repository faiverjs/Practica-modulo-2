"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import TodoItem from "./TodoItem"
import { setTodos } from "../redux/actions/todoActions"
import "./TodoList.css"

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      dispatch(setTodos(JSON.parse(storedTodos)))
    }
  }, [dispatch])

  // Guardar tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  if (todos.length === 0) {
    return <div className="empty-list">No hay tareas pendientes. ¡Añade una nueva!</div>
  }

  return (
    <div className="todo-list">
      <h2>Tareas ({todos.length})</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
