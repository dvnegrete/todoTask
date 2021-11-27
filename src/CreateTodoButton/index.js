import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const onclickButton = () => {
        props.setOpenModal(previousState => !previousState);        
    }
    return(
        <button 
        className="CreateTodoButton" 
        onClick={onclickButton}
        >
         +
        </button>
    );
}

export { CreateTodoButton };