import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrendingMovies();
  }, [URL]);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
