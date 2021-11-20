import React from "react";
// import './App.css';
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "cortar cebolla", completed: false},
//   { text: "Tomar el curso de React", completed: false },
//   { text: "Lavar la ropa", completed: false },
//   { text: "Recoger Pedido Amazon", completed: true },
//   { text: "Preparar cambio de trabajo", completed: true },
//   { text: "Lavar los trastes", completed: false },
//   { text: "Preparar Pedido Amazon", completed: false },
//   { text: "Preparar CV", completed: true },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [todos, setTodos] = React.useState(parsedTodos);
  
  //aqui viene el manejo del estado de toda la aplicación
  const [searchValue, setSearchValue] = React.useState("");
  //para poder llamar a React.useState es necesario haber importado antes

  // const completedTodos = todos.filter(todo => todo.completed === true)
  const completedTodos = todos.filter(todo => todo.completed).length;
  //es falso que mi variable sea falsa. Doble falso es verdadero.
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  if(searchValue < 1) {
    searchedTodos = todos
  } else {    
    //pasar a minusculas para hacer la comparación
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos)
  }

  const completedElement = (text) => {    
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const newTodos = [...todos];        
    newTodos[todoIndex].completed = true;
    //aqui estoy mandando el nuevo valor del Todo Completado, hace Re-render
    saveTodos(newTodos);
  }

  const deletedElement = (text) => {    
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const newTodos = [...todos];
    //con splice elimino ese elemento      
    newTodos.splice(todoIndex, 1);    
    saveTodos(newTodos);
  }

  return (   
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completedElement = {completedElement}
      deletedElement = {deletedElement}
    />
  );
}

export default App;