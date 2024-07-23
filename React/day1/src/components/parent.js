import Child from "./child";
function Parent() {
    return ( 
        <div>
            <h1>This is my parent component</h1>
            <Child name="kar" age="22" />
        </div>
     );
}

export default Parent;