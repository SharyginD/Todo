import React from 'react';
import {deleteNote} from "../../../redux/reducers/TodoListReducer";
import TodoList from "./TodoList";
import {connect} from "react-redux";

const TodoListContainer = React.memo(props => {
    return (
        <TodoList todo={props}/>
    )
});

let mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};

export default connect(mapStateToProps, {deleteNote})(TodoListContainer);