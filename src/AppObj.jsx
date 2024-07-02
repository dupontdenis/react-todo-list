import { useState } from "react";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState({});
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }

  // Example of adding a todo
  const addTodo = (title) => {
    const newId = crypto.randomUUID();
    const newTodos = { ...todos, [newId]: { title } };
    setTodos(newTodos);
  };

  // Example of removing a todo
  const deleteTodo = (id) => {
    const { [id]: deletedTodo, ...remainingTodos } = todos;
    setTodos(remainingTodos);
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
        {Object.entries(todos).map(([key, todo]) => (
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
