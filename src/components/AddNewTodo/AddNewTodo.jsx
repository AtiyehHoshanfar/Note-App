import { useState } from "react";
import styles from "./AddNewTodo.module.css";
function AddNewTodo({ handleTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmitTodo = (event) => {
    event.preventDefault();
    if (!title || !description) return;
    const newTodo = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      completed: false,
    };

    handleTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setDescription("");
  };
  return (
    <div className={styles.AddNewTodo__container}>
      <h2 className={styles.AddNewTodo__title}>Add New Todo</h2>
      <form>
        <div className={styles.AddNewTodo__input}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title..."
          />
        </div>

        <div className={styles.AddNewTodo__input}>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description..."
          />
        </div>
        <button
          onClick={handleSubmitTodo}
          className={styles.AddNewTodo__button}
        >
          Add New Todo
        </button>
      </form>
    </div>
  );
}

export default AddNewTodo;
