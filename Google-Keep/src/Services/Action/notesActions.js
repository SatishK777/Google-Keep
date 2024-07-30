import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const fetchNotes = () => async dispatch => {
  dispatch({ type: 'FETCH_NOTES_REQUEST' });
  try {
    const querySnapshot = await getDocs(collection(db, 'notes'));
    const notes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({ type: 'FETCH_NOTES_SUCCESS', payload: notes });
  } catch (error) {
    dispatch({ type: 'FETCH_NOTES_FAILURE', payload: error.message });
  }
};

export const addNote = (note) => async dispatch => {
  try {
    const docRef = await addDoc(collection(db, 'notes'), note);
    // const newNote = { id: docRef.id, ...note };
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  } catch (error) {
    console.error(error);
  }
};

export const updateNote = (note) => async dispatch => {
  try {
    const noteRef = doc(db, 'notes', note.id);
    await updateDoc(noteRef, { title: note.title, content: note.content, color: note.color });
    dispatch({ type: 'UPDATE_NOTE', payload: note });
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

export const deleteNote = (id) => async dispatch => {
  try {
    const noteRef = doc(db, 'notes', id);
    await deleteDoc(noteRef);
    dispatch({ type: 'DELETE_NOTE', payload: id });
  } catch (error) {
    console.error(error);
  }
};
