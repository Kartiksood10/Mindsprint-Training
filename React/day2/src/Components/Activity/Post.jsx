import { useEffect, useState } from "react";
import Comments from "./Comments";

function Post() {

    const [data,setData] = useState([]);
    const getData = async() => {
        
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await resp.json();
            setData(json);
        }
    
    useEffect(()=>{
        getData()
    }, [])
    return ( 

        <>
        {
            data.map(item=> (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <Comments postId={item.id} />
                    <hr />
                </div>
            ))
        }
            
        </>
     );

}


export default Post;