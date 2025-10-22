import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddItem from './components/ItemForm';
import Login from './components/Login';
import Signup from './components/Signup';
import About from "./components/About";

const baseURL = process.env.REACT_APP_API_URL; // Add this line

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);      // Store items from backend

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) setUser(savedUser);
  }, []);

  // Fetch items from backend API when app loads
  const fetchItems = () => {
    fetch(`${baseURL}/api/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error("Error fetching items:", error));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-800 dark:text-white transition">
        <Routes>
          <Route path="/" element={<Home items={items} />} />  {/* Pass items to Home */}
          <Route path="/add" element={<AddItem onItemAdded={fetchItems} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
