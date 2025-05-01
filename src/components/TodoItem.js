"use client"
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../redux/actions/todoActions"
import "./TodoItem.css"

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id))
  }

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="todo-checkbox" />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button onClick={handleDelete} className="delete-btn">
        Eliminar
      </button>
    </li>
  )
}

export default TodoItem
