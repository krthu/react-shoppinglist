import { useState } from 'react'
import AddItem from './components/AddItem.jsx'

import './App.css'
import List from './components/List.jsx';

function App() {
  const [list, setList] = useState([]);

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

  return (
    <div className='container'>
      <AddItem addToList={addItemToList}/>
      <List 
        list={list}
        toggleDone={toggleDone}
        deleteItemFromList={deleteItemFromList}
      />

    </div>
  )
}

export default App
