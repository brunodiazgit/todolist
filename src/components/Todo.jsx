import { useTask } from "../context/TaskContext"
import { useState } from "react"
import TodoList from "./TodoList"

function Todo() {
    const { addTask } = useTask()
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState('')

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask(newTask)
            setNewTask('')
            setError('')
        }
    }

    const handleInput = (e) => {
        let text = e.target.value;
        if (text.length > 100) {
            setNewTask(text.slice(0, 100));
            setError('No se permiten más de 100 caracteres');
        } else {
            setNewTask(text);
            setError('');
        }
    }

    return (
        <div className="flex flex-col justify-center items-center pt-16 gap-10 p-12">
            <h1 className=" text-5xl text-green-600 ">TO-DO List</h1>
            <div className="flex gap-3 mb-5 ">
                <input className="rounded-lg " type="text" value={newTask} onChange={handleInput} />
                <button className="bg-black rounded-lg w-32 h-10 text-green-600 hover:bg-gray-900" onClick={handleAddTask}>Add Todo</button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <TodoList />
        </div>
    )
}

export default Todo