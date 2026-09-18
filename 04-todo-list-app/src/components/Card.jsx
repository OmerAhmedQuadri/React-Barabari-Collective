import { useState } from "react"


function Card() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTaskToTheList = () => {

        setTodoList([...todoList, newTask])
        // setTodoList(todoList.push(newTask)) // -> not the right way since we are technically passing the ref of same arry to the setter
        // todoList.push(newTask) // -> X not the right way since we are not using the setter for state variable

        setNewTask('')
    }

  return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:'20px',
        border:'2px solid black',
        borderRadius:'5px'
    }}
    
    >
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                gap:'5px'
            }}

        >
            <input type="text" placeholder='Your task' 
                onChange={(e) => setNewTask(e.target.value)} 
                value={newTask}
            />
            <button
                onClick={addTaskToTheList}
            >Add</button>
        </div>
        <ul
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                gap:'4px'
            }}
        >

            {
                todoList.map((task) => (
                    <li
                        style={{
                            display:'flex',
                            padding:'3px',
                            border:'1px solid black',
                            borderRadius:'3px',
                            width:'100%'
                        }}
                        >{task}</li>

                ))
            }
            {/* <li
                style={{
                    display:'flex',
                    padding:'3px',
                    border:'1px solid black',
                    borderRadius:'3px',
                    width:'100%'
                }}
                >Write a blog</li> */}

        </ul>
        
    </div>
  )
}

export default Card