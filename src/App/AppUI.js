import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI ({
    loading,
    error,
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
        searchValue= {searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {error && <p>Tuvimos un error al carga tu lista de tareas :(</p>}
        {loading && <p>Espera un poco, estamos cargado tus tareas...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crear tu primera Tarea...!</p>}
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