import React from 'react'
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Login from './components/Login';
import TodoApp from './components/TodoApp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='bg-slate-400'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/TodoApp"
          element={<TodoApp setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App