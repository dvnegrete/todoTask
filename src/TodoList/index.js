import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return(
        <section className="TodoList">
            <ul className="TodoList--UL">
                {props.children}
            </ul>
        </section>             
    );
}

export { TodoList };