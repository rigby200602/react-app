import { useState } from "react";

function ListGroup() {
    const item = ['Paris','San Francisco', 'New York', 'London','Tokyo']
    const [selectedItem,setSelectedItem] = useState(-1)
    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {item.map((item, index)=> <li key={item} 
            className={selectedItem === index ? "list-group-item active": "list-group-item"}
            onClick={() => {setSelectedItem(index)}}>{item}</li>)}
        </ul>
    </>
    )
}

export default ListGroup;