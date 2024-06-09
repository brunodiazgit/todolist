import { useTask } from "../context/TaskProvider"
import TodoItem from "./TodoItem"

function TodoList(){
    const {tasks} = useTask()
    return(
        <>
        {tasks.map(task => (
            <TodoItem task={task} key={task.id}/>
        ))}
        </>
    )
}

export default TodoList