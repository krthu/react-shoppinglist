import { useEffect, useState } from 'react'
import AddItem from './components/AddItem.jsx'

import './App.css'
import List from './components/List.jsx';
import EditItem from './components/EditItem.jsx';

function App() {

  const [lists, setLists] = useState(null);
  const [currentListIndex, setCurrentListIndex] = useState(null)

  const handelListChange = (newList) => {
    const updatedLists = lists.map((list, i) => {
      if (i === currentListIndex) {
        return newList;
      } else {
        return list;
      }
    })
    setLists(updatedLists);
  }

  const createNewList = () => {
    const newList = []
    setLists(prevLists => {
      const updatedLists = [...prevLists, newList];
      setCurrentListIndex(updatedLists.length - 1); // Sätter index till den nya listan
      return updatedLists;
    });
  }


  const addItemToList = (item) => {
    const updatedList = [...lists[currentListIndex], item]
    handelListChange(updatedList)
  }

  // const [list, setList] = useState(null);

 

  // useEffect(() => {
  //   if (list !== null) {
  //     localStorage.setItem('saved-items', JSON.stringify(list));
  //     // console.log(`items saved -> ${list}`)
  //   }

  // }, [list]);

   useEffect(() => {
     const savedItems = JSON.parse(localStorage.getItem('saved-items'));
     // console.log(`items-loaded -> ${savedItems}`)
     if (savedItems) {
       setLists(savedItems);
     } else {
       setLists([])
     }


  }, [])

  return (
    <div className='container'>

        <>
          <header>
          <h1>ShoppingList</h1>
          <p onClick={createNewList}>Add list</p>
          </header>

          <main>
            {currentListIndex !== null  && lists[currentListIndex] ? (
              <List
                list={lists[currentListIndex]}
                listChanged={handelListChange}
                // toggleDone={toggleDone}
                // deleteItemFromList={deleteItemFromList}
                // editIndex={toggleOverlay}
              />
            ) : (
            <p>Loading....</p>
          )}
          </main>
          <footer>
   
            <AddItem addToList={addItemToList} />
          </footer>
        </>




    </div>

  )
}

export default App
