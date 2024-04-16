import { useState } from "react";
import "./App.css";

import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoStatus from "./components/TodoStatus/TodoStatus";
import NoteAppHeader from "./components/NoteAppHeader/NoteAppHeader";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <NoteAppHeader/>
      <AddNewTodo handleTodos={setTodos} />
      <TodoStatus todos={todos}/>
      <TodoList setTodos={setTodos} todos={todos} />

    </div>
  );
}

export default App;
