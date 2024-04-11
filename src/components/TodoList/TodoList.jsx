import styles from "./TodoList.module.css";
import "./TodoList.module.css";
function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.TodoList__container}>
      {todos.map((todo) => (
        <TodoItem setTodos={setTodos} key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;

function TodoItem({ todo, setTodos }) {
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };
  return (
    <div
      className={`${styles.TodoItem__container}  ${
        todo.completed && styles.TodoItem__completed
      }`}
    >
      <h2 className={styles.TodoItem__title}>{todo.title} </h2>
      <h3 className={styles.TodoItem__description}>{todo.description}</h3>
      <div className={styles.TodoItem__detail}>
        <span className={styles.TodoItem__date}>
          {new Date(todo.createdAt).toLocaleString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "short",
          })}
        </span>
        <div className={styles.TodoItem__operations}>
          <button onClick={() => handleDelete(todo.id)}>❌</button>
          <button onClick={() => handleComplete(todo.id)}>✔️</button>
        </div>
      </div>
    </div>
  );
}
