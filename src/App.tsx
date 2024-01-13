import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Login } from './screens/Login';
import { SignIn } from './screens/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
   
    <Router>
      <Routes>
        <Route path='/' index Component={Login} />
        <Route path="/signin" Component={SignIn} />
      </Routes>
    </Router>

  );
}

export default App;
