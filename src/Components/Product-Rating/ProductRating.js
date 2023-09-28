import React from 'react';
import './ProductRating.css'; // Import your CSS file

function ProductRating(props) {
  // Ensure that parsedRating is a number
  var parsedRating = parseFloat(props.rating);

  return (
    <div className="product-rating">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= parsedRating ? 'star filled' : 'star'}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
      <div className="rating-text">{parsedRating.toFixed(1)}</div>
    </div>
  );
}

export default ProductRating;
