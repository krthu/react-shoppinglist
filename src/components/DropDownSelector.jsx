import React, { useState } from "react";
import './DropdownSelector.css';
import EditList from "./EditList";

const DropdownMenu = ({ items, onSelectItem }) => {
    return (
        <ul className="dropdown-menu">
            {items.map((item, index) => (
                <li key={index} onClick={() => onSelectItem(item)}>
                    {item.name}
                </li>
            ))}

        </ul>
    )
}



const DropdownSelector = ({ list, startIndex, onSelect, editItemSave, deleteList }) => {
    console.log('Dropdown index = ' + startIndex)

    const [showDropdown, setShowDropdown] = useState(false);
    const selectedList = list[startIndex];
    const [isEditing, setIsEditing] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleSelectedItem = (item, index) => {

        setShowDropdown(false);
        onSelect(item, index)
    };

    const handleItemNameClick = () => {
        console.log('Bring up overlay!')
        setIsEditing(true);
    }

    const toggleOverlay = () =>{
        setIsEditing(!isEditing)
    }

    return (
        <div className="dropdown-container">
            <div  className="dropDown">
                <h2 onClick={() => handleItemNameClick(selectedList)}>{selectedList.name}</h2>
            </div>

            {showDropdown && (
                <DropdownMenu
                    items={list.filter(item => item !== selectedList)}
                    onSelectItem={handleSelectedItem}
                />
            )

            }

            <span className="material-symbols-outlined dropdown-toggle" onClick={toggleDropdown}>
                arrow_downward
            </span>

            {isEditing && (
                <EditList
                    list={selectedList}
                    name={selectedList.name}
                    toggleOverlay={toggleOverlay}
                    save={ editItemSave}
                    delete={deleteList}
                />
            ) }

        </div>
    );
};

export default DropdownSelector



