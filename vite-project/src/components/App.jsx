import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { ToDoList } from "../ToDoList"

export default function App(){
  const[itemList, setItemList] = useState([]);
  function addItem(title){
    setItemList(prevItem => {
    return [...itemList, {
        id: crypto.randomUUID(), title, completed: false
    }];
    });
    
    }

  return (
  <>
  <NewTodoForm onSubmit={addItem}/>
  <ToDoList itemList={itemList} setItemList={setItemList}/>
  </>
  )
}