// GoogleLogin.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../Services/Action/authaction';

const GoogleLogin = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <button onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
};

export default GoogleLogin;
