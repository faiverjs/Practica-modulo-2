import "./App.css"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Lista de Tareas</h1>
      </header>
      <main className="app-main">
        <AddTodo />
        <TodoList />
      </main>
    </div>
  )
}

export default App
