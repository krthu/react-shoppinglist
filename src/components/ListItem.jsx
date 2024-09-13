const ListItem = (props) => {


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
                <span className="material-symbols-outlined" style={{color: props.item.done ? 'green' : 'black'}} >
                    {props.item.done ? "task_alt" : "circle"}

                </span>
            </div>
            <p className={`${props.item.done ? 'done' : ''}`} onClick={() => props.editIndex(props.index)}>{getQuantity()}{props.item.name}</p>
            <button className='delete-button' onClick={() => props.deleteItemFromList(props.index)}><span className="material-symbols-outlined">
delete
</span></button>
        </li>
    )
}

export default ListItem;
