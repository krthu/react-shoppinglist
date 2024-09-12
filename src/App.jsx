import { useState } from 'react'
import AddItem from './components/AddItem.jsx'

import './App.css'
import List from './components/List.jsx';
import EditItem from './components/EditItem.jsx';

function App() {
  const [list, setList] = useState([]);
  //const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedIndexForEdit, setSelectedIndexForEdit] = useState(null);
  

  const addItemToList = (item) => {
    setList([...list, item])
  }

  const deleteItemFromList = (index) => {
    const updatedList = list.filter((item, i) => index !== i)
    setList(updatedList)
  }

  const toggleDone = (index) => {

    const updatedList = list.map((item, i) => {
      if (i === index) {
        return{ ...item, done: !item.done}
      }
      return item;
    })
    setList(updatedList);

  }

  const toggleOverlay = (index) => {
    setSelectedIndexForEdit(index)
  } 

  return (
    <div className='container'>
      <h1>ShoppingList</h1>
      <AddItem addToList={addItemToList}/>
      <List 
        list={list}
        toggleDone={toggleDone}
        deleteItemFromList={deleteItemFromList}
        editIndex={toggleOverlay}
      />
      {selectedIndexForEdit !== null && (
        <EditItem 
          selectedItemForEdit={list[selectedIndexForEdit]}
          index={selectedIndexForEdit}

        />

      )}

    </div>

  )
}

export default App
