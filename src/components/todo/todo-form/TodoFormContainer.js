import React from "react";
import TodoForm from "./TodoForm";
import {connect} from "react-redux";
import {addNote} from "../../../redux/reducers/TodoListReducer";

const TodoFormContainer = React.memo(props => {
    return (
        <TodoForm todo={props}/>
    )
});

export default connect(null, {addNote})(TodoFormContainer);