import React from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {
    return (
        <div className ="searchbar">
            <input
            name="movieName"
            className="search" 
            type="search"
            placeholder="Search Movies"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            />
        </div>
    );
}

export default SearchBar;
