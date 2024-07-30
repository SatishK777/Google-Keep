// const initialState = {
//     user: null,
//     loading: false,
//     error: null
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'REGISTER_REQUEST':
//         return { ...state, loading: true };
//       case 'REGISTER_SUCCESS':
//         return { ...state, loading: false };
//       case 'REGISTER_FAILURE':
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };

  
//   export default authReducer;
  

// ........
// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'REGISTER_SUCCESS':
//       return { ...state, loading: false, error: null };
//     case 'REGISTER_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     case 'LOGIN_SUCCESS':
//       return { ...state, user: action.payload, loading: false, error: null };
//     case 'LOGIN_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     case 'LOGOUT_SUCCESS':
//       return { ...state, user: null, loading: false, error: null };
//     case 'LOGOUT_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default authReducer;

// authReducer.js
const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, user: null, error: action.payload };
    case 'LOGOUT_SUCCESS':
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
