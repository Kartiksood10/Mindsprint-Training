import { useState } from "react";
import axios from "axios";

function AddUser() {
    const [user,setUser] = useState({id:'', name:'', email: ''})
    const handleSubmit = async(e)=>{

        e.preventDefault();
        const resp = await axios.post('http://localhost:3000/users',user);
        if(resp.status===201){
            alert('User created')
        }
        else{
            alert('ERROR')
        }
    }
    return (  
        <div>
            <h2>User registeration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter ID" onChange={(e)=>setUser({...user, id:e.target.value})} />
                <br /> <br />
                <input type="text" placeholder="Enter Name" onChange={(e)=>setUser({...user, name:e.target.value})}/>
                <br /> <br />
                <input type="email" placeholder="Enter Email" onChange={(e)=>setUser({...user, email:e.target.value})}/>
                <br /> <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;