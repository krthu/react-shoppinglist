import { useEffect, useState } from 'react'
import AddItem from './components/AddItem.jsx'

import './App.css'
import List from './components/List.jsx';
import EditItem from './components/EditItem.jsx';
import DropdownSelector from './components/DropDownSelector.jsx';

function App() {

  const [lists, setLists] = useState(null);
  const [currentListIndex, setCurrentListIndex] = useState(null)

  const handelListChange = (newItems) => {
    const updatedLists = lists.map((list, i) => {
      if (i === currentListIndex) {
        return {...list, items: newItems};
      } else {
        return list;
      }
    })
    setLists(updatedLists);
  }

  const createNewList = () => {
    const newList = {
      name: `List ${lists.length + 1}`,
      items: []
    };
    setLists(prevLists => {
      const updatedLists = [...prevLists, newList];
      setCurrentListIndex(updatedLists.length - 1); // Sätter index till den nya listan
      return updatedLists;
    });
  }


  const addItemToList = (item) => {
    const updatedList = [...lists[currentListIndex].items, item]
    handelListChange(updatedList)
  }



  // const [list, setList] = useState(null);
  const viewOtherList = (item) => {
    const listIndex = lists.findIndex(list => list.name === item.name);
    setCurrentListIndex(listIndex)
    console.log("New list is" + listIndex)
  }
 

  useEffect(() => {
    if (lists !== null) {
      localStorage.setItem('saved-items', JSON.stringify(lists));
      // console.log(`items saved -> ${list}`)
    }

  }, [lists]);

   useEffect(() => {
     const savedItems = JSON.parse(localStorage.getItem('saved-items'));
     console.log(`items-loaded -> ${savedItems}`)
   
     console.log(`Parsed items:`, savedItems);
     if (savedItems && savedItems.length > 0) {
       setLists(savedItems);
       setCurrentListIndex(savedItems.length - 1);
     } else {
      const defaultList = [{ name: 'list', items: [] }];
       setLists(defaultList);
       setCurrentListIndex(0);
     }
   


  }, [])

  useEffect(() => {
    console.log("Current list index changed to:", currentListIndex);
  }, [currentListIndex]);
  

  return (
    <div className='container'>

        <>
          <header>
            
            <h1>ShoppingList</h1>
            <section className='choose-list-section'>
            <p onClick={createNewList}>Add list</p>
            {currentListIndex !== null  && lists[currentListIndex] ?
            
            // (<p>{lists[currentListIndex].name}</p>)
            <DropdownSelector list={lists} startIndex={currentListIndex} onSelect={viewOtherList}/>
            :
            (<p></p>)
            }
            </section>
          </header>

          <main>
            {currentListIndex !== null  && lists[currentListIndex] ? (
              <List
                key={currentListIndex}
                list={lists[currentListIndex].items}
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
