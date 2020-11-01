import React from 'react';
import TodoElement from "../todo-element/TodoElement";
import "./TodoList.css";

const TodoList = (props) => {

    const notes = props.todo.todo.notes.map(note =>
        (<TodoElement note={note.note} key={note.id} delete={() => deleteNote(note.id)}/>));

    let deleteNote = (noteId) => {
        props.todo.deleteNote(noteId);
    };

    return (
        <div className="todo-list">
            {notes.length ? notes : <h1>Waiting for new notes...</h1>}
        </div>
    )
};

export default TodoList;