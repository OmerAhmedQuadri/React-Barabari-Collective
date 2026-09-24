import { useState } from "react"

function Card() {
    // task = { id: 938454050943, title: 'Complete your project'}
    // todoList = [ {}, {}, {}, {} ]
    const [todos, settodos] = useState([])
    const [newTask, setnewTask] = useState('')

    const addTaskToList = () => {

        const task = {
            id: Date.now(),
            title: newTask,
        }

        // todos.push(task) -> dont change state variable directly, use setter functions
        settodos([...todos, task])
    }

    const deleteTask = (id) => {
        // todos.filter((t) => t.id !=id) // this is new array with given task deleted
        settodos(todos.filter((t) => t.id !=id))
    }

  return (
    <div className="flex flex-col gap-4 items-center rounded border-2 border-black p-5">
        {/* Main heading */}
        <h1 className="font-bold text-2xl">Todo List</h1>

        {/* Tasks input */}
        <div className="flex flex-row gap-4 w-full items-center justify-center">
            <input type="text" placeholder="Enter here.." 
                value={newTask} onChange={e => setnewTask(e.target.value)}
                className="rounded border border-gray-400 px-3 py-2 outline-none focus:border-blue-500"
            />
            <button 
                onClick={addTaskToList}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
            >Add</button>
        </div>

        {/* Display tasks */}
        <ul className="flex w-full flex-col gap-2">
            {
                todos.map((t, i) => (
                    <li 
                        className="flex items-center justify-between border border-black px-3 py-2 rounded hover:bg-gray-100"
                        key={t.id}
                    >
                        <span>{t.title}</span>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white rounded py-1 px-3 text-sm"
                            onClick={() => deleteTask(t.id)}
                        >Delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Card

