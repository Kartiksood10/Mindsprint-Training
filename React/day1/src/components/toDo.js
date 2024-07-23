import { useState } from "react";

function ToDo() {

    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const handleChange = (e) => {

        setInput(e.target.value)

    }
    const handleSubmit=(e)=>{

        e.preventDefault()
        setList([...list, {id: Date.now(), task: input, completed: false}])
        e.target.reset()
    }

    const statusUpdate=(id)=>{

        setList(
            list.map(item=>{
                if(item.id==id){
                    item.completed=!item.completed
                }
                return item;
            })
        )
    }
    return ( 
        <div>
            <h3>To Do App</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Task" className="form-control" onChange={handleChange}/>
            <button type="submit">Add Task</button>
            </form>

        <ul>
            {
                list.map(item=>(
                    <li key={item.id} onClick={()=>statusUpdate(item.id)} style={{color:item.completed?'green':'red'}}>{item.task}</li>
                ))
            }
        </ul>
            
        </div>
     );
}

export default ToDo;