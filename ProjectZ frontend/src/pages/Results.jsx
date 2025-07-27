// Result.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { result, uploadedImage } = location.state || {};

  if (!result) return <p>No result data found</p>;

  return (
    <div>
      <h2>Search Results</h2>
      <img src={uploadedImage} alt="Uploaded" width="200" />

      <ul>
        {result.matches?.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> — ₹{item.price} —
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
