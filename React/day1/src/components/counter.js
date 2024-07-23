import { useState } from "react";

function Counter() {

    const [count,setCount] = useState(0);

    const increment = () => {

        setCount(count+1)
    }
    const decrement = () => {

        if(count==0){

            alert('Cannot be less than 0')
        }
        else{
        setCount(count-1)
        }   
    }
    return ( 

        <div>
            <h3>Counter App : {count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
     );
}

export default Counter;