import React from 'react';
import TodoElement from "../todo-element/TodoElement";

const TodoList = (props) => {

    let deleteNote = (noteId) => {
        props.todo.deleteNote(noteId);
    };

    const notes = props.todo.todo.notes.map(note =>
        (<TodoElement note={note.note} key={note.id} delete={() => deleteNote(note.id)}/>));

    return (
        <div className="todo-list">
            {notes}
        </div>
    )
};

export default TodoList;