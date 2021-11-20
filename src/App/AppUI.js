import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedElement,
    deletedElement,
    }) {
    return(
        <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
      //aqui le pasamos a nuestro componente de busqueda los valores del estado de React
        searchValue= {searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>        
        {searchedTodos.map(todo => (
          <TodoItem 
          key ={todo.text}
          text ={todo.text}
          completed = {todo.completed}
          onComplete = {()=>completedElement(todo.text)}
          onDeleted = {()=> deletedElement(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
    );
}

export {AppUI};