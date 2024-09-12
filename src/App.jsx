import { useEffect, useState } from 'react'
import AddItem from './components/AddItem.jsx'

import './App.css'
import List from './components/List.jsx';
import EditItem from './components/EditItem.jsx';

function App() {
  const [list, setList] = useState(null);

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
        return editedItem;
      }else {
       return item;
      }
    });
    setList(updatedList);
    toggleOverlay(null)
  }

  useEffect(() =>{
    if (list !== null){
      localStorage.setItem('saved-items', JSON.stringify(list));
      console.log(`items saved -> ${list}`)
    }

  },[list]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('saved-items'));
    console.log(`items-loaded -> ${savedItems}`)
    if (savedItems){
      setList(savedItems);
    } else{
      setList([])
    }

  },[])

  return (
    <div className='container'>
      <main>
        <h1>ShoppingList</h1>
        {list !== null ? (
          <>
        <AddItem addToList={addItemToList}/>
        <List 
          list={list}
          toggleDone={toggleDone}
          deleteItemFromList={deleteItemFromList}
          editIndex={toggleOverlay}
        />
        </>
        ) : (
          <p>Loading....</p>
        )}
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
