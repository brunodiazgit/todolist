/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export const useTask = () => {
    return useContext(TaskContext)
}

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const addTask = text => {
        setTasks([...tasks, { id: Date.now(), text, completed: false }])
    }

    const toggleTask = id => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}
