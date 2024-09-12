const ListItem = (props) => {

    // const toggleDone = () => {
    //     props.toggleDone()
    // }



    return(
        <section className="list-row">
            <div 
            className={`circle ${props.item.done ? 'filled' : ''}`} 
            onClick={ () => {props.toggleDone(props.index)}}>

            </div>
            <p className={`${props.item.done ? 'done' : ''}`} onClick={() => props.editIndex(props.index)}>{props.item.name}</p>
            <button className='delete-button' onClick={() => props.deleteItemFromList(props.index)}>Delete</button>
        </section>
    )
}

export default ListItem;