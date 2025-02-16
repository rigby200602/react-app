import { Fragment } from "react/jsx-runtime";

function ListGroup() {
    const item = ['Paris','San Francisco', 'New York', 'London','Tokyo']
        
    return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
            {item.map(item=> <li className="list-group-item" onClick={() => (item)}>{item}</li>)}
        </ul>
    </Fragment>
    )
}

export default ListGroup;