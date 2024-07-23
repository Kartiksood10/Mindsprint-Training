import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ListUser() {

    const [users,setUsers] = useState([]);
    const getData = async() => {

        const resp = await axios.get('http://localhost:3000/users');
        setUsers(resp.data);
        
    }
    useEffect(()=>{
        getData()
    }, [])

    const deleteData=async(id)=>{
        const resp = await axios.delete('http://localhost:3000/users/'+id)
        console.log(resp);
        alert('User deleted')
        getData()
    }
    return ( <div>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <button onClick={()=>deleteData(item.id)}>X</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div> );
}

export default ListUser;