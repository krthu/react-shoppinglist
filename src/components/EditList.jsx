import { useState } from "react";

const EditList = (props) => {

    const [name, setName] = useState(props.list.name)
    


    const handleNameInputChange = (event) => {
        setName(event.target.value);
    }


    const handleSave = () => {
        props.save(props.list, name);
        props.toggleOverlay()

    }

    const handleDelete = () => {
        props.delete()
        props.toggleOverlay()
    }


    return (
        <div className='overlay'>
        <section className='overlay-content'>
            <h2>Edit List</h2>
            <input type="text" value={name} onChange={handleNameInputChange} placeholder="List name"/>

            <section className="button-section">
                <button onClick={handleSave} className="add-button" disabled={name === ''}>Save</button>
                <button onClick={() => props.toggleOverlay(null)} className="cancel-button" >Cancel</button>
            </section>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
 
        </section>

      </div>

    )
}
export default EditList;