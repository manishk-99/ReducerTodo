import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from './components/TodoForms'
import Todos from './components/Todos'
import './App.css';

import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/reducer";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App With Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;

