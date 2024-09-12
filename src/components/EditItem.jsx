import { useState } from "react";

const EditItem = (props) => {

    const [name, setName] = useState(props.item.name)


    const handleNameInputChange = (event) => {
        setName(event.target.value);
    }

    const handleSave = () => {
        const item = {
            name: name,
            done: props.item.done
        }
        props.save(item, props.index)

    }


    return (
        <div className='overlay'>
        <section className='overlay-content'>
            <h2>Edit Item</h2>
            <input type="text" value={name} onChange={handleNameInputChange}/>

            <section className="button-section">
                <button onClick={handleSave} className="add-button">Save</button>
                <button onClick={() => props.toggleOverlay(null)} className="cancel-button">Cancel</button>
            </section>
 
        </section>

      </div>

    )
}
export default EditItem;