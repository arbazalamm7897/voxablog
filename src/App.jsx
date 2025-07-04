import React from 'react';
import Header from './components/Header.jsx';
import Trending from './components/Trending.jsx';
import LatestBlogs from './components/LatestBlogs.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <LatestBlogs />
      <Footer />
    </div>
  );
}

export default App;
