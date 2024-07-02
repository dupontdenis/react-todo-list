import { useState } from "react";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState(new Map());
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }
  // Example of adding a todo
  const addTodo = (title) => {
    console.log(title);
    setTodos(new Map(todos.set(crypto.randomUUID(), { title })));
  };

  // Example of removing a todo
  const deleteTodo = (id) => {
    const updatedTodos = new Map(todos);
    updatedTodos.delete(id);
    setTodos(updatedTodos);
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        {[...todos.entries()].map(([key, todo]) => (
          // console.log(key, todo),
          <li key={key}>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(key)} className="btn btn-primary">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
