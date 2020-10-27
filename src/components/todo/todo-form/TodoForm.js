import React from 'react';
import './TodoForm.css';
import {Field, reduxForm, reset} from "redux-form";

const TodoForm = (props) => {

    let addNote = (data) => {
        props.todo.addNote(data.todoText);
    };

    return (
        <React.Fragment>
            <TodoFormRedux onSubmit={addNote}/>
        </React.Fragment>
    )
};

const Form = (props) => {
    return (
        <form className="todo-form" onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter text"} component={"input"} className="todo-input"
                   name={"todoText"} autoComplete="off"/>
            <button className="todo-button" type="submit">Add</button>
        </form>
    )
};

const afterSubmit = (result, dispatch) => dispatch(reset("todoForm"));
const TodoFormRedux = reduxForm({form: "todoForm", onSubmitSuccess: afterSubmit})(Form);

export default TodoForm;