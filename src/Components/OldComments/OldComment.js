import React, { useState, useEffect } from 'react';
import './OldComments.css';
import ChildComment from './ChildComment';

function OldComments(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/commentBox/${props.product}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [props.product]);

  useEffect(() => {
    // Fetch data at regular intervals (e.g., every 5 seconds)
    const intervalId = setInterval(() => {
      fetch(`/api/commentBox/${props.product}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((fetchedData) => {
          setData(fetchedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [props.product]);

  return (
    <div >
      {data.length > 0 ? (
        <div className='Oldcomment-div'>
          {data.map((item, index) => (
            <div key={index}>
              <ChildComment
                username={item.username}
                rating={item.rating} 
                meassage={item.meassage}
              ></ChildComment>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews yet!!</p>
      )}
    </div>
  );
}

export default OldComments;
