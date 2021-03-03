import React from 'react';

const Header = ({ getFeaturedMovies }) => {
  return(
    <div className="title">
    <h1>Movie Application</h1>
    <div className="featured">
    <h2 onClick={getFeaturedMovies}>Featured Movies</h2>
    </div>
    </div>
  );
};

export default Header;