function ListGroup() {
    const item = ['Paris','San Francisco', 'New York', 'London','Tokyo']
        
    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {item.map((item, index)=> <li key={item} className="list-group-item" onClick={() => console.log(item, index)}>{item}</li>)}
        </ul>
    </>
    )
}

export default ListGroup;