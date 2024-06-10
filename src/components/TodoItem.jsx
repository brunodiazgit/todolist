/* eslint-disable react/prop-types */
import { useTask } from "../context/TaskContext"
function TodoItem({task}){
    const {toggleTask, deleteTask} = useTask()
    return(
        <div className="flex flex-col justify-center  h-56 w-56 bg-yellow-300 relative">
        <input className="absolute top-2 left-2" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        <p className="text-center p-2">{task.text}</p>
        <button className="w-16 h-8 bg-red-500 rounded-tl-lg text-white absolute bottom-0 right-0" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
    )
}

export default TodoItem