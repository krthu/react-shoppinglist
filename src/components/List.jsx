import ListItem from "./ListItem";

const List = (props) => {

    const items = props.list.map((item, index) => (
        <ListItem 
            item={item} 
            key={index} 
            toggleDone={props.toggleDone} 
            index={index}
            deleteItemFromList={props.deleteItemFromList}
            editIndex={props.editIndex}
        />  
 ));

    return(
        <ul className="list-section">
            {items}
        </ul>
    )
}

export default List;