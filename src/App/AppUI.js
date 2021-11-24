import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


function AppUI () {
    return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>
      
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completedElement,
          deletedElement
        }) => (
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
        )}
      </TodoContext.Consumer>
      
      <CreateTodoButton/>
      
    </React.Fragment>
    );
}

export {AppUI};