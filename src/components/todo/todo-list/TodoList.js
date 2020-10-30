import React from 'react';
import TodoElement from "../todo-element/TodoElement";
import "./TodoList.css";

const TodoList = (props) => {

    let deleteNote = (noteId) => {
        props.todo.deleteNote(noteId);
    };

    const notes = props.todo.todo.notes.map(note =>
        (<TodoElement note={note.note} key={note.id} delete={() => deleteNote(note.id)}/>));

    return (
        <div className="todo-list">
            {notes.length ? notes : <h1>Waiting for new items...</h1>}
        </div>
    )
};

export default TodoList;