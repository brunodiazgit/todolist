import { useTask } from "../context/TaskContext"
import { useState } from "react"
import TodoList from "./TodoList"

function Todo() {
    const { addTask } = useTask()
    const [newTask, setNewTask] = useState('')


    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask(newTask)
            setNewTask('')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center pt-16 gap-5 p-12">
            <h1 className=" text-5xl text-green-600 ">TO-DO List</h1>
            <div className="flex gap-3 mb-5 ">
                <input className="rounded-lg " type="text" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
                <button className="bg-black rounded-lg w-32 h-10 text-green-600 hover:bg-gray-900" onClick={handleAddTask}>Add Todo</button>
            </div>
            <TodoList/>
        </div>
    )
}

export default Todo