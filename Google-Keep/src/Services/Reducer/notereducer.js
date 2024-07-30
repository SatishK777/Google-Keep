// src/reducers/notesReducer.js
const initialState = {
  notes: [],
  loading: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_NOTES_SUCCESS':
      return { ...state, notes: action.payload, loading: false };
    case 'FETCH_NOTES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
