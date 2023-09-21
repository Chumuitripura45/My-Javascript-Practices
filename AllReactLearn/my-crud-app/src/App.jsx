import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      if (editingItem !== null) {
        // Editing an existing item
        const updatedItems = [...items];
        updatedItems[editingItem] = inputValue;
        setItems(updatedItems);
        setEditingItem(null);
      } else {
        // Adding a new item
        setItems([...items, inputValue]);
      }
      setInputValue('');
    }
  };

  const editItem = (index) => {
    setInputValue(items[index]);
    setEditingItem(index);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const sortItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
    setItems(sortedItems);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    sortItems();
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <div>
        <input
          type="text"
          placeholder="Add new item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>
          {editingItem !== null ? 'Edit Item' : 'Add Item'}
        </button>
        <button onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
