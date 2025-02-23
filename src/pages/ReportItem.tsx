import React, { useState } from 'react';
import { Camera } from 'lucide-react';
// import { db } from '../firebase';
// import { db } from "../../firebase";
// import { db } from "../firebase";

import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ReportItem = () => {
  const [itemType, setItemType] = useState<'lost' | 'found'>('lost');
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    date: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'items'), {
        ...formData,
        type: itemType,
        createdAt: Timestamp.now(),
      });
      alert('Item successfully reported!');
      setFormData({ title: '', category: '', description: '', location: '', date: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error reporting the item. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Report an Item</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-lg ${
              itemType === 'lost' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setItemType('lost')}
          >
            Lost Item
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-lg ${
              itemType === 'found' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setItemType('found')}
          >
            Found Item
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Blue Backpack, iPhone 13"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Provide detailed description of the item..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Library 2nd Floor, Student Center"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white ${
              itemType === 'lost' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportItem;
