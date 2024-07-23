function Child(props) {

    const {name,age} = props;
    return ( 
        <div>
        <h3>{name}:{age}</h3>
        </div>
     );
}

export default Child;