const ListItem = (props) => {

    // const toggleDone = () => {
    //     props.toggleDone()
    // }



    return(
        <section className="list-row">
            

            <p className={`${props.item.done ? 'done' : ''}`} onClick={ () => {props.toggleDone(props.index)}}>{props.item.name}</p>
            <button className='delete-button' onClick={() => props.deleteItemFromList(props.index)}>Delete</button>
        </section>
    )
}

export default ListItem;