import { useEffect, useState } from "react";

function Width() {

    const[width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handle = () => 
            setWidth(window.innerWidth);
            window.addEventListener('resize', handle);

            return(()=> {

                window.removeEventListener('resize', handle);
            })
        
    })
    return ( 
        <h1>Window width: {width}</h1>
     );
}

export default Width;