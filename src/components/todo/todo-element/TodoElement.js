import React from 'react';
import './TodoElement.css';

const TodoElement = (props) => {
    return (
        <div className="todo-note">
            <p>{props.note}</p>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
};

export default TodoElement;