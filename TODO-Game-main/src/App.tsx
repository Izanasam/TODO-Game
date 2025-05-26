import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>([])

  return (
    <div className="app">
      <h1>Todo Game</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App 