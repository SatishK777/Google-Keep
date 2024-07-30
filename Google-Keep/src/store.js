import { createStore, combineReducers,compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { thunk } from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './Services/Reducer/authreducer';
import notesReducer from './Services/Reducer/notereducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
