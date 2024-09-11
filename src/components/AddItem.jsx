import { useState } from "react"

const AddItem = (props) => {
    const InputField = document.getElementById('item-input');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }


    const createNewItem = () => {
        if (inputValue === ''){
            return
        }
        const item = {
            name: inputValue,
            done: false,
        }
        props.addToList(item)
        setInputValue('')
        InputField.focus();
    }



    return (
        <section className="add-item-section">
            <h1>AddItem</h1>
            <input 
                id="item-input"
                type="text" 
                placeholder="Item" 
                onChange={handleInputChange}
                value={inputValue}/>
            <button onClick={createNewItem}>Add</button>
        </section>

    )
  
}

export default AddItem;