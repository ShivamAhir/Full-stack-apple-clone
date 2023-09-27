import React, { useState, useEffect } from "react";



import './Homes.css';

function Home() {
  const [home, setHome] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const lastIndex = home.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index, home]);

  return (
    <section className="section">
      <div className="section-center">
        {home.map((item, itemIndex) => {
          const { id, link, name} = item;
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === home.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <a href={'/' + name.toLowerCase()}>
                <img src={link} alt={name} className="person-img" />
                <h1>{name}</h1>
              </a>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        </button>
      </div>
    </section>
  );
}

export default Home;
