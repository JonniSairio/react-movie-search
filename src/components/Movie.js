import React from 'react';
import '../styles/Movie.css';

const IMG_API = 'https://image.tmdb.org/t/p/w500';

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  return (
    <div className='movie'>
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : 'https://sd.keepcalms.com/i/error-404-no-wallpaper-found.png'
        }
        alt={title}
      />
      <div className='movie-info'>
        <h3>{title ? title : 'No information available'}</h3>
        <span>{vote_average}</span>
      </div>
      <div className='movie-release'>
        <h3>{release_date}</h3>
      </div>
      <div className='movie-overview'>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
