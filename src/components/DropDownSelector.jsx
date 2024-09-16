import React, { useState } from "react";
import './DropdownSelector.css'

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



const DropdownSelector = ({ list, startIndex, onSelect }) => {
    console.log('Dropdown index = ' + startIndex)

    const [showDropdown, setShowDropdown] = useState(false);
    const selectedList = list[startIndex];

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleSelectedItem = (item, index) => {

        setShowDropdown(false);
        onSelect(item, index)
    };

    const handleItemNameClick = () => {
        console.log('Bring up overlay!')
    }

    return (
        <div className="dropdown-container">
            <div  className="dropwDown">
                <h2 onClick={handleItemNameClick}>{selectedList.name}</h2>
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

        </div>
    );
};

export default DropdownSelector



