function Event() {

    const handleClick = () => {

        alert('Clicked')
        console.log("button clicked");
    }
    return ( 
        <button onClick={handleClick}>CLICK ME</button>
     );
}

export default Event;