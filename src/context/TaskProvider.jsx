/* eslint-disable react/prop-types */
import {taskContext} from './TaskContext'
import { useState } from "react"

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

    const completedTasks = () =>{
        return tasks.filter(task => task.completed)
    }

    const pendingTasks = () => {
        return tasks.filter(task => !task.completed)
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <taskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, completedTasks, pendingTasks }}>
            {children}
        </taskContext.Provider>
    )
}

export default TaskProvider