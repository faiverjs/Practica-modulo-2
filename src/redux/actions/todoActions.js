// Tipos de acciones
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_TODOS = "SET_TODOS"

// Creadores de acciones
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
})

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
})
