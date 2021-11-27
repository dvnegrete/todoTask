import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange =(event)=> {
        setNewTodoValue(event.target.value);
    }

    const onCancel =()=> {
        setOpenModal(false);
    }

    const onSubmit =(event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form 
        onSubmit={onSubmit}
        className="TodoForm"
        >
            <label
            className="TodoForm--label"
            >Nuevo ToDo...</label>
            <textarea 
            value = {newTodoValue}
            onChange = {onChange}
            placeholder = "Anota una nueva tarea..."
            className="TodoForm--textArea"
            />
            <div
            className="TodoForm__DIV"
            >
                <button
                type="button"
                onClick={onCancel}
                className="TodoForm__DIV--button"
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm__DIV--button"                
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm };