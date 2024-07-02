export function TodoItem({ id, title, deleteTodo }) {
  return (
    <li>
      <span>{title}</span>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
