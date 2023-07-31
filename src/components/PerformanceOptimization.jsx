import React, { useState, useEffect } from 'react';

const PerformanceOptimization = () => {
  const [items, setItems] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = () => {
      // Simulate an API call with a delay
      setTimeout(() => {
        const data = [
          { id: 1, name: 'Item 1', description: 'Description 1' },
          { id: 2, name: 'Item 2', description: 'Description 2' },
          { id: 3, name: 'Item 3', description: 'Description 3' },
          // Add more items here
        ];
        setItems(data);
      }, 1000); // Simulate a delay of 1 second
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceOptimization;
