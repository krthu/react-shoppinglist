const ListItem = (props) => {

    // const toggleDone = () => {
    //     props.toggleDone()
    // }



    return(
        <section className="list-row">
            <p onClick={ () => {props.toggleDone(props.index)}}>{props.item.name} {props.item.done ? "Done" : "Left"}</p>
            <button className="delete-button" onClick={() => props.deleteItemFromList(props.index)}>Delete</button>
        </section>
    )
}

export default ListItem;