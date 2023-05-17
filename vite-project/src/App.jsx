import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App(){
  const[itemList, setItemList] = useState([]);

  function addItem(title){
    setItemList(prevItem => {
    return [...itemList, {
        id: crypto.randomUUID(), title, completed: false
    }];
    });
    
  }

  function handleComplete(id, checked){
    setItemList(prevItem => {
      return prevItem.map(itemObj => {
        if (itemObj.id === id){
          itemObj.completed = checked;
        }
        return itemObj
      })
    })
  }

  function handleDelete(id){
    setItemList(prevItem => {
      return prevItem.filter(itemObj => itemObj.id !== id)
    })
  }

  return (
  <>
  <NewTodoForm onSubmit={addItem}/>
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    {itemList.length === 0 && "No Todo Items"}
    {itemList.map((itemObj) => (
      <li key={itemObj.id}>
      <label>
        <input type="checkbox" checked={itemObj.completed} onChange={e => handleComplete(itemObj.id, e.target.checked)}></input> {itemObj.title}
      </label>
      <button className="btn btn-danger" onClick={e => handleDelete(itemObj.id)}>Delete</button>
    </li>
    ))}
  </ul>
  </>
  )
}