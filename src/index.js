import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import "./index.css"

// Implementación de lazy loading
const App = lazy(() => import("./App"))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div className="loading">Cargando...</div>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
