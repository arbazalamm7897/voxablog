import React from 'react';
import styles from './Trending.module.css';

function Trending() {
  return (
  <section className={`animate__animated animate__fadeInUp ${styles.trending}`}>

      <h2>Trending</h2>
      <div className={styles.cards}>
        {[1, 2, 3].map((id) => (
          <div key={id} className={styles.card}>
            <img src={`https://images.unsplash.com/photo-1722503583962-fb0622b436c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ2dpbmclMjBwbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3D`} alt="Trending" />
            <h3>BLOG HEADING</h3>
            <p>Description of first product</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
