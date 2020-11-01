import React from 'react';
import './TodoForm.css';
import {Field, reduxForm, reset} from "redux-form";

const TodoForm = (props) => {

    let addNote = (data) => {
        props.todo.addNote(data.todoText);
    };

    let clearNotes = () => {
        props.todo.clearNotes();
    };

    return (
        <React.Fragment>
            <TodoFormRedux onSubmit={addNote} clearNotes={clearNotes}/>
        </React.Fragment>
    )
};

const Form = (props) => {
    return (
        <form className="todo-form" onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter text"} component={"input"} className="todo-input"
                   name={"todoText"} autoComplete="off"/>
            <div className="form-buttons">
                <button className="todo-button" type="submit">Add</button>
                <button className="clear-button" onClick={props.clearNotes}>Clear</button>
            </div>
        </form>
    )
};

const afterSubmit = (result, dispatch) => dispatch(reset("todoForm"));
const TodoFormRedux = reduxForm({form: "todoForm", onSubmitSuccess: afterSubmit})(Form);

export default TodoForm;