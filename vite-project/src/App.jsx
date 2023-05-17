import "./styles.css"
export default function App(){
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"></input>
      <button className="btn">Add</button>
    </div>
  </form>
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"></input> Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}