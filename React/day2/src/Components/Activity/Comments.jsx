import { useEffect, useState } from "react";

function Comments() {

    const [comments,setComments] = useState([]);
    const getData = async() => {
        
            const resp = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
            const json = await resp.json();
            setComments(json);
        }
    
    useEffect(()=>{
        getData()
    }, [])
    return ( 

        <>
        {
            comments.map(item=> (
                <div key={item.id}>
                    <h3>User:{item.name}</h3>
                    <p>Message:{item.body}</p>
                    <hr />
                </div>
            ))
        }
            
        </>
     );

    }


    export default Comments;