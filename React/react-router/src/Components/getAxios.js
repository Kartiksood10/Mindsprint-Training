import axios from "axios";
import { useEffect, useState } from "react";

function GetAxios() {

    const [users,setUsers] = useState([]);
    const getData = async() => {

            const resp = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            setUsers(resp.data);
        
    }
    useEffect(()=>{
        getData()
    }, [])

    return ( 
        <div>
            {users && <h4>{users.name}</h4>}
        </div>
     );
}

export default GetAxios
