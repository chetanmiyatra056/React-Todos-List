// import logo from './logo.svg';
import './App.css';
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("I am on delete of todo.", todo)

    // Delete this way in react does not Worker.
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)

    let sno;
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>

        <Header title="MyTodoList" searchBar={false} />
        <Routes>

          <Route exact path="/" element={
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </React.Fragment>
          } />

          <Route exact path="/about" element={<About />}>
          </Route>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
