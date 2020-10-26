import React from 'react';
import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import './Todo.css';

const Todo = () => {
    return (
        <div className="todo-container">
            <h1>What do you want to do?</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    )
};

export default Todo;