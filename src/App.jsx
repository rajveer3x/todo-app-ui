
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {

  const todoItems = [
    {
      name: "writing",
      date: "04/03/2024"
    },
    {
      name: "reading",
      date: "29/03/2024"
    },
    {
      name: "fifhgting",
      date: "29/03/2024"
    }
  ]

  return (
    <center className="todo-container">
      <AppName />
      <TodoItems todoItems={todoItems} />
    </center>
  )
}

export default App
