import Todo from "./components/Todo"
import TaskProvider from "./context/TaskProvider"

function App() {

  return (
    <TaskProvider>
      <Todo />
    </TaskProvider>
  )
}

export default App