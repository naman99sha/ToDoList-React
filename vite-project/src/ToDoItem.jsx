export function ToDoItem({itemObj, handleComplete, handleDelete}){
    return <li>
    <label>
    <input type="checkbox" checked={itemObj.completed} onChange={e => handleComplete(itemObj.id, e.target.checked)}></input> {itemObj.title}
    </label>
    <button className="btn btn-danger" onClick={e => handleDelete(itemObj.id)}>Delete</button>
</li>
}