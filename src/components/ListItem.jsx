const ListItem = (props) => {

    // const toggleDone = () => {
    //     props.toggleDone()
    // }

    const getQuantity = () => {
        if (props.item.quantity){
            return(
                <span>{`${props.item.quantity}: `}</span>
            )
        }
    }

    return(
        <li className="list-row">
            <div 
            className="circle-container"
            onClick={ () => {props.toggleDone(props.index)}}
            >
                <div 
                className={`circle ${props.item.done ? 'filled' : ''}`} >

                </div>
            </div>
            <p className={`${props.item.done ? 'done' : ''}`} onClick={() => props.editIndex(props.index)}>{getQuantity()}{props.item.name}</p>
            <button className='delete-button' onClick={() => props.deleteItemFromList(props.index)}>Delete</button>
        </li>
    )
}

export default ListItem;