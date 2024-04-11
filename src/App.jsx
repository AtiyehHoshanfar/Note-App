import { useState } from "react";
import "./App.css";

import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoStatus from "./components/TodoStatus/TodoStatus";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <TodoStatus todos={todos}/>
      <AddNewTodo handleTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />

    </div>
  );
}

export default App;
