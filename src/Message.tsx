
function Message() {
    const name = "Tung";
  if (name) 
    {return <div> Hello {name} </div>}
  else {
    return <div>Hello World!</div>
    }
}

export default Message;