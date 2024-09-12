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
    // Think about combining this and edit item to one function

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
  
  const editItem = (editedItem, index) => {
    const updatedList = list.map((item, i) => {
      if(i === index) {
        return{...item, ...editedItem};
      }
      return item;
    });
    setList(updatedList);
    toggleOverlay(null)
  }

  return (
    <div className='container'>
      <main>
        <h1>ShoppingList</h1>
        <AddItem addToList={addItemToList}/>
        <List 
          list={list}
          toggleDone={toggleDone}
          deleteItemFromList={deleteItemFromList}
          editIndex={toggleOverlay}
        />
      </main>
      {selectedIndexForEdit !== null && (
        <EditItem 
          item={list[selectedIndexForEdit]}
          index={selectedIndexForEdit}
          toggleOverlay={toggleOverlay}
          save={editItem}

        />

      )}

    </div>

  )
}

export default App
