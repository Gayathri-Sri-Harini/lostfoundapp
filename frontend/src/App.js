import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddItem from './components/ItemForm';
import Login from './components/Login';
import Signup from './components/Signup';
import About from "./components/About";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) setUser(savedUser);
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-800 dark:text-white transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
