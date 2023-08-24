import React from 'react'
import { useState } from 'react';
import "../style/Ratings.css"
function Ratings({ initialRating, onRatingChange}) {
    const [rating, setRating] = useState(initialRating);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
      onRatingChange(newRating);
    };
    
  return (
    <div>
       <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= rating ? 'active' : ''}`}
          onClick={() => handleRatingChange(value)}
        >
          ★
        </span>
      ))}
    </div>
    </div>

  )
}

export default Ratings