import React from 'react';
import '../styles/Movie.css';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map((movie, i) => {
        return (
          <Movie
            key={i}
            title={movies[i].title}
            poster_path={movies[i].poster_path}
            overview={movies[i].overview}
            vote_average={movies[i].vote_average}
            release_date={movies[i].release_date}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
