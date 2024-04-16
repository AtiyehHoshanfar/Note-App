import { useState } from "react";
import "./App.css";

import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoStatus from "./components/TodoStatus/TodoStatus";
import NoteAppHeader from "./components/NoteAppHeader/NoteAppHeader";

function App() {
  const [todos, setTodos] = useState([]);
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
    <div>
      <NoteAppHeader/>
      <AddNewTodo handleTodos={setTodos} />
      <TodoStatus todos={todos}/>
      <TodoList onDelete={handleDelete} onComplete={handleComplete} todos={todos} />

    </div>
  );
}

export default App;
