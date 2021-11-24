import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const onclickButton = () => {
        props.setOpenModal(true);
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