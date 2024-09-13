import { useState } from "react";

const EditItem = (props) => {

    const [name, setName] = useState(props.item.name)
    const [quantity, setQuantity] = useState(props.item.quantity ? props.item.quantity : '')


    const handleNameInputChange = (event) => {
        setName(event.target.value);
    }


    const handleQuantityInputChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleSave = () => {
        const item = {
            name: name,
            done: props.item.done,
            ...(quantity && {quantity})
        }
        props.save(item, props.index)

    }


    return (
        <div className='overlay'>
        <section className='overlay-content'>
            <h2>Edit Item</h2>
            <input type="text" value={name} onChange={handleNameInputChange} placeholder="Item"/>
            <input type="number" value={quantity} onChange={handleQuantityInputChange} placeholder="Quantity"/>

            <section className="button-section">
                <button onClick={handleSave} className="add-button" disabled={name === ''}>Save</button>
                <button onClick={() => props.toggleOverlay(null)} className="cancel-button" >Cancel</button>
            </section>
 
        </section>

      </div>

    )
}
export default EditItem;