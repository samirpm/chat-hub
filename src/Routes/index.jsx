import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import HomePage from '../pages/homepage';

const MainRoute = () => {
  return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
};

export default MainRoute;
