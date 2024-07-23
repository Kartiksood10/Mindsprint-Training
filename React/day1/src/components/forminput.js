import { useState } from "react";

function FormInput() {

    const [input, setInput] = useState('');
    const handleChange=(e) => {

        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        alert("Welcome " +input)
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" onChange={handleChange} />
            <h3>Welcome {input}</h3>
            <button type="submit">Save</button>
            </form>
        </div>
     );
}

export default FormInput;