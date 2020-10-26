import React from 'react';
import TodoElement from "../todo-element/TodoElement";

const TodoList = () => {
    return (
        <div className="todo-list">
            <TodoElement/>
            <TodoElement/>
            <TodoElement/>
        </div>
    )
};

export default TodoList;