import React from 'react';
import styles from './LatestBlogs.module.css';

function LatestBlogs() {
  return (
    <section className={`animate__animated animate__fadeInUp ${styles.latest}`}>

      <h2>Latest Blogs</h2>
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className={styles.blog}>
          <div className={styles.blogText}>
            <h3>BLOG HEADING</h3>
            <p>Description of the blog</p>
          </div>
          <img src={`https://images.unsplash.com/photo-1638540362954-8c30c2e2d4a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJsb2dzfGVufDB8fDB8fHww`} alt="Blog" />
        </div>
      ))}
    </section>
  );
}

export default LatestBlogs;
