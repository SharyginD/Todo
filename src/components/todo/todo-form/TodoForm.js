import React from 'react';
import './TodoForm.css';

const TodoForm = () => {
    return (
        <React.Fragment>
            <from className="todo-form">
                <input placeholder="Enter text" className="todo-input"/>
                <button className="todo-button">Add</button>
            </from>
        </React.Fragment>
    )
};

export default TodoForm;