import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../modal";


function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completedElement,
    deletedElement,
    openModal,
    setOpenModal              
  } = React.useContext(TodoContext);
  
  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>        
        {error && <p>UPS! tuvimos un error.</p>}
        {loading && <p>Espera por favor... estamos recopilando tu información</p>}
        {(!loading && !searchedTodos.lenght) && <p>¡Crea tu primer TODO!</p>}

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

         {!!openModal && (
            <Modal>
            <p>Teletransportación</p>
          </Modal>
         )}

      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
    );
}

export {AppUI};