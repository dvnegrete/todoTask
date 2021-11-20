import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const onclickButton = (msg) => {
        alert(msg);
    }
    return(
        <button 
        className="CreateTodoButton" 
        onClick={()=> onclickButton("MEnsaje a imprimir")}
        >
         +
        </button>
    );
}

export { CreateTodoButton };