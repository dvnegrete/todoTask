import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage("TODOS_V1", []);
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
    
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
      
      const addTodo = (text) => {    
        const newTodos = [...todos];        
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      }

      const completedElement = (text) => {    
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        //aqui falta cambiar para que se marque como true y/o false segun el estado
        const changeTodo = newTodos[todoIndex];
        if(!changeTodo.completed) {
          newTodos[todoIndex].completed = true;
        } else {
          newTodos[todoIndex].completed = false;
        }
        saveTodos(newTodos);
      }
    
      const deletedElement = (text) => {    
        const todoIndex = todos.findIndex(todo => todo.text === text);    
        const newTodos = [...todos];    
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completedElement,
            deletedElement,
            openModal, 
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
