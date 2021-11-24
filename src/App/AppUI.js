import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completedElement,
    deletedElement
  } = React.useContext(TodoContext);

    return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>

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