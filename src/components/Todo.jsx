import { useTask } from "../context/TaskContext"
import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import { FaCheck, FaCircle, FaList } from 'react-icons/fa'

function Todo() {
    const { tasks, addTask, completedTasks, pendingTasks } = useTask()
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState('')
    const [filteredTasks, setFilteredTasks] = useState(tasks)

    useEffect(() => {
        setFilteredTasks(tasks)
    }, [tasks]);

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
            setNewTask(text.slice(0, 100))
            setError('No se permiten más de 100 caracteres')
        } else {
            setNewTask(text)
            setError('')
        }
    }


    const handleFilter = (filterType) => {
        if (filterType === true) {
            setFilteredTasks(completedTasks())
        } else if (filterType === false) {
            setFilteredTasks(pendingTasks())
        } else {
            setFilteredTasks(tasks)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTask()
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-10 p-10">
            <h1 className=" text-5xl text-green-600 ">TO-DO List</h1>
            <div className="flex gap-3 mb-5 ">
                <input className="rounded-lg " type="text" value={newTask} onChange={handleInput} onKeyDown={handleKeyDown} />
                <button className="bg-gray-900 rounded-lg w-32 h-10 text-green-600 hover:bg-gray-700" onClick={handleAddTask}>Add Todo</button>
            </div>
            <div className="flex gap-10">
                <button onClick={() => handleFilter(true)} className="flex justify-center items-center h-10 w-16 bg-black rounded-lg border-gray-500 border-2 text-green-700 hover:bg-gray-800">
                    <FaCheck />
                </button>
                <button onClick={() => handleFilter(false)} className="flex justify-center items-center h-10 w-16 bg-black rounded-lg border-gray-500 border-2 text-green-700 hover:bg-gray-800">
                    <FaCircle />
                </button>
                <button onClick={() => handleFilter(null)} className="flex justify-center items-center h-10 w-16 bg-black rounded-lg border-gray-500 border-2 text-green-700 hover:bg-gray-800">
                    <FaList />
                </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <TodoList tasks={filteredTasks} />
        </div>
    )
}

export default Todo