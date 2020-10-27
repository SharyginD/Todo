import React, {PureComponent} from 'react';
import {deleteNoteAC} from "../../../redux/reducers/TodoListReducer";
import TodoList from "./TodoList";
import {connect} from "react-redux";

class TodoListContainer extends PureComponent {
    render() {
        return (
            <TodoList todo={this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (noteId) => {
            dispatch(deleteNoteAC(noteId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);