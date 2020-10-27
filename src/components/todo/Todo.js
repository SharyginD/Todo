import React from 'react';
import './Todo.css';
import TodoFormContainer from "./todo-form/TodoFormContainer";
import TodoListContainer from "./todo-list/TodoListContainer";

const Todo = () => {
    return (
        <div className="todo-container">
            <h1>What do you want to do?</h1>
            <TodoFormContainer/>
            <TodoListContainer/>
        </div>
    )
};

export default Todo;