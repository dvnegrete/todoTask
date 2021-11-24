import React from "react";
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

function useLocalStorage (itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });  
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item, 
    saveItem,
    loading,
    error
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  if(!searchValue >= 1) {
    searchedTodos = todos;
  } else {        
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedElement = (text) => {    
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const newTodos = [...todos];        
    newTodos[todoIndex].completed = true;    
    saveTodos(newTodos);
  }

  const deletedElement = (text) => {    
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const newTodos = [...todos];    
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (   
    <AppUI
      loading={loading}
      error={error}
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