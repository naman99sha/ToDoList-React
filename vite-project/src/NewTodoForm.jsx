import React, { useState } from "react";

export function NewTodoForm({ onSubmit }){
    const[newItem, setItem] = useState("");

    function addItem(event){
        event.preventDefault();
        if (newItem === "") return;
        onSubmit(newItem)
        setItem("");
    }
    return <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" onChange={e => setItem(e.target.value)} value={newItem}></input>
      <button className="btn" onClick={addItem}>Add</button>
    </div>
  </form>
}