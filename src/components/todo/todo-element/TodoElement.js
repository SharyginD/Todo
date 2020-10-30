import React from 'react';
import './TodoElement.css';

const TodoElement = (props) => {
    return (
        <div className="todo-note">
            <p>{props.note}</p>
            <button onClick={props.delete}><i className="fa fa-trash"/></button>
            <button onClick={props.delete}><i className="fa fa-edit"/></button>
        </div>
    )
};

export default TodoElement;