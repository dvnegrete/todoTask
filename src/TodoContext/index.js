import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1", []);            
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
    
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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedElement,
            deletedElement,
            openModal,
            setOpenModal
        }}>
            {props.chidren}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};