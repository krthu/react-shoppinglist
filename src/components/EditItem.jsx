const EditItem = (props) => {
    return (
        <div className='overlay'>
        <section className='overlay-content'>
          <h2>Edit Item</h2>
          <p>{props.selectedItemForEdit.name}</p>

        </section>

      </div>

    )
}
export default EditItem;