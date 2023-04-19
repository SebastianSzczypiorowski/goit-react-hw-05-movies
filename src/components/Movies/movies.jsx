import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
    const query = event.target.elements.query.value;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    setSearchResults(response.data.results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>

      {searchResults.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Movies;
