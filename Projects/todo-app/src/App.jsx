import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css"


function App() {
  return <center>
    <AppName />
    <AddTodo />
    <TodoList />
    <TodoList />
  </center >
}

export default App;
