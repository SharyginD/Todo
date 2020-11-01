const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const CLEAR_NOTES = "CLEAR_NOTES";

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        note
    }
};

export const deleteNote = (noteId) => {
    return {
        type: DELETE_NOTE,
        noteId
    }
};

export const clearNotes = () => {
    return {
        type: CLEAR_NOTES
    }
};

let initialiseStore = {
    notes: []
};

export let todoListReducer = (state = initialiseStore, action) => {
    let copyState = {...state};
    if (action.type === ADD_NOTE && action.note) {
        if (action.note.trim()) {
            copyState.notes.push({
                id: Date.now(),
                note: action.note
            });
        }
    } else if (action.type === DELETE_NOTE) {
        copyState.notes = copyState.notes.filter(note => note.id !== action.noteId);
    } else if (action.type === CLEAR_NOTES) {
        copyState.notes = [];
    }
    return copyState;
};