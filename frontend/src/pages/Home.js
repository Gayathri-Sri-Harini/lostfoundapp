import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import axios from 'axios';
import './Home.css';

function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all items
  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items');
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Filter items by name or location
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2 className="home-title">🧭 Welcome to Lost & Found</h2>
      <p className="home-subtitle">
        Help people find what they lost or report what you’ve found.  
        A small effort can make someone’s day ✨
      </p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search items by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ItemList items={filteredItems} />
    </div>
  );
}

export default Home;
