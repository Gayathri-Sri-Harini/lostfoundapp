import React, { useState } from 'react';
import { addItem } from '../api';
import './ItemForm.css';

function ItemForm({ onItemAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    contactInfo: '',
    status: 'lost',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem(formData);
      alert('✅ Item added successfully!');
      onItemAdded(); // refresh list
      setFormData({
        name: '',
        description: '',
        location: '',
        contactInfo: '',
        status: 'lost',
      });
    } catch (err) {
      console.error(err);
      alert('❌ Error adding item!');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">➕ Add Lost / Found Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        ></textarea>
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          name="contactInfo"
          placeholder="Contact Info"
          value={formData.contactInfo}
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ItemForm;
