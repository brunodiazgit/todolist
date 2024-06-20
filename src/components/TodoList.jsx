/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

function TodoList({ tasks }) {
    return (
        <div className="flex flex-col justify-center gap-y-10 md:flex-row md:flex-wrap md:gap-x-32 md:gap-y-32">
            {tasks.map((task) => (
                <TodoItem task={task} key={task.id} />
            ))}
        </div>
    )
}

export default TodoList
