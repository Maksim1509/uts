import React from 'react';
import './index.scss';
import SearchIcon from '../icons/SearchIcon.jsx';

const Search = () => (
  <div className="search">
    <input
      className="search-input"
      type="text"
      name="search"
      id="search"
      placeholder="Search"
    />
    <div className="search-icon">
      <SearchIcon />
    </div>
  </div>
);

export default Search;
