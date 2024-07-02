import { useState } from "react";
import "./styles.css";
import { produce } from "immer";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }

  const addTodo = (title) => {
    setTodos((currentTodos) =>
      produce(currentTodos, (draft) => {
        draft.push({ id: crypto.randomUUID(), title });
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      produce(currentTodos, (draft) => {
        const index = draft.findIndex((todo) => todo.id === id);
        if (index !== -1) draft.splice(index, 1);
      })
    );
  };

  return (
    <>
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
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
