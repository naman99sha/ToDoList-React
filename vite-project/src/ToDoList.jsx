import React, {useState} from "react";
import { ToDoItem } from "./ToDoItem"

export function ToDoList({itemList, setItemList}){
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
    return <>
    <h1 className="header">ToDo List</h1>
    <ul className="list">
    {itemList.length === 0 && "No Todo Items"}
    {itemList.map((itemObj) => (
        <ToDoItem itemObj={itemObj} key={itemObj.id} handleComplete={handleComplete} handleDelete={handleDelete}/>
    ))}
    </ul>
    </>
}