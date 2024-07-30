// import { auth } from '../../firebase';
// import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

// export const login = (email, password) => async dispatch => {
//   dispatch({ type: 'LOGIN_REQUEST' });
//   try {
//     const userCredential = await auth.signInWithEmailAndPassword(email, password);
//     dispatch({ type: 'LOGIN_SUCCESS', payload: userCredential.user });
//   } catch (error) {
//     dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
//   }
// };

// export const registerUser = (email, password) => async dispatch => {
//   dispatch({ type: 'REGISTER_REQUEST' });
//   const auth = getAuth();
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     dispatch({ type: 'REGISTER_SUCCESS' });
//   } catch (error) {
//     dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
//   }
// };

// export const logout = () => async dispatch => {
//   await auth.signOut();
//   dispatch({ type: 'LOGOUT' });
// };


// .............
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../../firebase';

// export const register = (email, password) => async dispatch => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     dispatch({ type: 'REGISTER_SUCCESS' });
//   } catch (error) {
//     dispatch({ type: 'REGISTER_FAIL', payload: error.message });
//   }
// };

// export const login = (email, password,navigate) => async dispatch => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     dispatch({ type: 'LOGIN_SUCCESS' });
//   } catch (error) {
//     dispatch({ type: 'LOGIN_FAIL', payload: "didnt" });
//     navigate('/register');
//   }
// };

// export const logout = () => async dispatch => {
//   try {
//     await signOut(auth);
//     dispatch({ type: 'LOGOUT_SUCCESS' });
//   } catch (error) {
//     dispatch({ type: 'LOGOUT_FAIL', payload: error.message });
//   }
// };

// authActions.js
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

// Action Types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Action Creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

// Thunk Action for Google Login
export const loginWithGoogle = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// Thunk Action for Logout
export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

