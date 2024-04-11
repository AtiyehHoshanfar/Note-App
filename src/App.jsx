import { useState } from "react";
import "./App.css";

import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <AddNewTodo handleTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
