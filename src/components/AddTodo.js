"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/actions/todoActions"
import "./AddTodo.css"

const AddTodo = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text))
      setText("")
    }
  }

  return (
    <div className="add-todo">
      <h2>Añadir Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué necesitas hacer?"
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Añadir
        </button>
      </form>
    </div>
  )
}

export default AddTodo
