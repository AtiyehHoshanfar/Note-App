import { useState } from "react";
import styles from "./App.module.css";

import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoStatus from "./components/TodoStatus/TodoStatus";
import NoteAppHeader from "./components/NoteAppHeader/NoteAppHeader";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    let savedTodos = todos;
    savedTodos = savedTodos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };
  return (
    <div className={styles.appContainer}>
      <NoteAppHeader className={styles.NoteAppHeader__container} />
      <AddNewTodo
        className={styles.AddNewTodo__container}
        handleTodos={setTodos}
        todos={todos}
      />
      <TodoStatus className={styles.TodoStatus__container} todos={todos} />
      <TodoList
        className={styles.TodoList__container}
        onDelete={handleDelete}
        onComplete={handleComplete}
        todos={todos}
      />
    </div>
  );
}

export default App;
