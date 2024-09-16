import { useEffect, useState } from 'react'
import ListItem from "./ListItem";
import EditItem from './EditItem';

const List = (props) => {
    const list = props.list;
    console.log(list);
    console.log(props.list);

    const [selectedIndexForEdit, setSelectedIndexForEdit] = useState(null);



    const deleteItemFromList = (index) => {
        const updatedList = list.filter((item, i) => index !== i)
        props.listChanged(updatedList)
    }

    const toggleDone = (index) => {
        // Think about combining this and edit item to one function

        const updatedList = list.map((item, i) => {
            if (i === index) {
                return { ...item, done: !item.done }
            }
            return item;
        })
        props.listChanged(updatedList);


    }

    const toggleOverlay = (index) => {
        setSelectedIndexForEdit(index)
    }

    const editItem = (editedItem, index) => {

        const updatedList = list.map((item, i) => {
            if (i === index) {
                return editedItem;
            } else {
                return item;
            }
        });
        props.listChanged(updatedList);
        toggleOverlay(null)
    }

    const items = () => {
        if (list.length !== 0) {
           return list.map((item, index) => (
                <ListItem
                    item={item}
                    key={index}
                    toggleDone={toggleDone}
                    index={index}
                    deleteItemFromList={deleteItemFromList}
                    editIndex={toggleOverlay}
                />

            ))
        } else {
           return <p>Empty</p>
        }
    }

    return (
        <>
            <ul className="list-section">
                {items()}
            </ul>

            {selectedIndexForEdit !== null && (
                <EditItem
                    item={list[selectedIndexForEdit]}
                    index={selectedIndexForEdit}
                    toggleOverlay={toggleOverlay}
                    save={editItem}

                />

            )}
        </>
    )
}

export default List;