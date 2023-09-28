// CommentBox.js

import React, { useState } from 'react';
import './Comment-box.css';

function CommentBox(props) {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false); // Track comment submission

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      product_id: props.product_id,
      rating,
      comment,
    };

    try {
      const response = await fetch('/api/commentbox', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Comment submitted successfully');
        // Clear the form fields
        setRating('');
        setComment('');
        // Set the comment submission state to true
        setCommentSubmitted(true);
      } else {
        console.error('Error submitting comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!commentSubmitted) {
    // Render the comment box only if the comment hasn't been submitted
    return (
      <div className='newComment'>
        <div className='userBox'>
          <img
            id='userP'
            src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
            alt='User Profile'
          />
          <span id='Username'>You</span>
        </div>
        <form className='rating-form' onSubmit={handleSubmit}>
          <input name='product_id' value={props.product_id} type='hidden' />
          <div className='rating'>
            <input
              type='radio'
              id='star1'
              name='rating'
              value='5'
              onChange={handleRatingChange}
            />
            <label htmlFor='star1'>★</label>
            <input
              type='radio'
              id='star2'
              name='rating'
              value='4'
              onChange={handleRatingChange}
            />
            <label htmlFor='star2'>★</label>
            <input
              type='radio'
              id='star3'
              name='rating'
              value='3'
              onChange={handleRatingChange}
            />
            <label htmlFor='star3'>★</label>
            <input
              type='radio'
              id='star4'
              name='rating'
              value='2'
              onChange={handleRatingChange}
            />
            <label htmlFor='star4'>★</label>
            <input
              type='radio'
              id='star5'
              name='rating'
              value='1'
              onChange={handleRatingChange}
            />
            <label htmlFor='star5'>★</label>
          </div>
          <br />
          <div className='writing-section'>
            <label htmlFor='comment'>Write your comment:</label>
            <br />
            <textarea
              id='comment'
              name='comment'
              rows='4'
              cols='50'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <br />
          <input id='Feedback-submit' type='submit' value='Submit' />
        </form>
      </div>
    );
  } else {
    // Render nothing if the comment has been submitted
    return null;
  }
}

export default CommentBox;
