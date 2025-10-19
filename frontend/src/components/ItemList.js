import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ItemList() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/items')
      .then((res) => setItems(res.data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  // ✅ Fix: handle undefined names safely
  const filteredItems = items.filter((item) => {
    const name = item.name ? item.name.toLowerCase() : '';
    const location = item.location ? item.location.toLowerCase() : '';
    return (
      name.includes(searchTerm.toLowerCase()) ||
      location.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="px-6 py-10 bg-transparent">
      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No items found 😔
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className={`p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-800 border-l-4 ${
                item.status === 'lost' ? 'border-red-500' : 'border-green-500'
              }`}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 capitalize">
                {item.name || 'Unnamed Item'}
              </h3>
              <p
                className={`text-sm font-semibold mb-2 ${
                  item.status === 'lost'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-green-600 dark:text-green-400'
                }`}
              >
                Status: {item.status}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                📍 Location: <span className="font-medium">{item.location || 'Unknown'}</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                🗓️ {item.date ? new Date(item.date).toLocaleDateString() : 'No date'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
