import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';


const App = () => {

 //States
 const [movies, setMovies] = useState([]);
 const [searchValue, setSearchValue] = useState('');

//Calling getFeaturedMovies when page loads
 useEffect(() => {
  getFeaturedMovies();
}, []);

// Calling getMovies based on user's search when inputfield changes
 useEffect(() => {
  getMovies(searchValue);
},[searchValue]);

 const API_KEY = process.env.REACT_APP_MOVIE_API;
 //calling featured movies when page loads
 const getFeaturedMovies = async () => {
  const FEATURED_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1 `;
  const request = await fetch(FEATURED_API_URL);
  const response = await request.json();
  if(response.results) setMovies(response.results);
 };

 //calling movies by search value
 const getMovies = async () => {
  const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchValue}`;
  const request = await fetch(SEARCH_API_URL);
  const response = await request.json();
  if(response.results) setMovies(response.results);
 };

 return (
   <div>
     <div className="header">
      <Header getFeaturedMovies={getFeaturedMovies} />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
     </div>
    <MovieList movies={movies} />
   </div>
 );
}

export default App;
