import { useState } from "react"
import "./styles.css"
export default function App(){
  const[newItem, setItem] = useState("");
  const[itemList, setItemList] = useState([]);

  function addItem(event){
    event.preventDefault();
    setItemList(prevItem => {
      return [...itemList, {
        id: crypto.randomUUID(), title: newItem, completed: false
      }];
    });
    setItem("");
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
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" onChange={e => setItem(e.target.value)} value={newItem}></input>
      <button className="btn" onClick={addItem}>Add</button>
    </div>
  </form>
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