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
  const handleSort=(e)=>{
    console.log(e.target.value)
    switch(e.target.value){
      case 0:{
        const earliest=[...todos].sort((a,b)=>a.createdAt-b.createdAt)
        setTodos(earliest)
        break;
      }
      case 1:{
        const latest=[...todos].sort((a,b)=>b.createdAt-a.createdAt)
        setTodos(latest)
        break;
      }
      case 2:{
        const completed=[...todos].sort((a,b)=>Number(b.completed)-Number(a.completed))
        console.log(completed)
        setTodos(completed)
        break;
      }
    }
      }
  return (
    <div className={styles.appContainer}>
      <NoteAppHeader className={styles.NoteAppHeader__container} onSort={handleSort} />
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
