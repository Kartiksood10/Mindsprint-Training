import products from '../products.json'

function Loops() {
    //const array = [{id:1, name:"kar"}, {id:2, name:"sood"}];
    return ( <>
    
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
                <tbody>
                    {
                        products.map(item =>(
                            <tr key={item.id}>  
                            <td>{item.id}</td>
                            <td>{item.prod_name}</td>
                            <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            
        </table>
    </> );
}

export default Loops;