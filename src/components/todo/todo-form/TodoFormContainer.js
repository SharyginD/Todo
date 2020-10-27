import React, {PureComponent} from "react";
import TodoForm from "./TodoForm";
import {connect} from "react-redux";
import {addNoteAC} from "../../../redux/reducers/TodoListReducer";

class TodoFormContainer extends PureComponent {

    render() {
        return (
            <TodoForm todo={this.props}/>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => {
            dispatch(addNoteAC(note));
        }
    }
};

export default connect(null, mapDispatchToProps)(TodoFormContainer);