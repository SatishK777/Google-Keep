import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Register from './components/Register';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from './components/GoogleLogin';

const App = () => {
  return (
    <Provider store={store}>
       <Router>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/addNote" element={<AddNote />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/gl" element={<GoogleLogin />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
