import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './movie-details.module.css';

export const idContext = createContext(null);

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(URL);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [URL]);

  return (
    <idContext.Provider value={movieId}>
      <main className={css.main}>
        {movie.poster_path ? (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="Movie poster"
          ></img>
        ) : (
          <p>Image not available</p>
        )}
        <div className={css.info}>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres?.map(genre => (
              <span key={genre.name}>{genre.name} </span>
            ))}
          </p>
        </div>
        <div className={css.additionalInfo}>
          <p>additional information</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
        <div className={css.outlet}>
          <Outlet />
        </div>
      </main>
    </idContext.Provider>
  );
};

export default MovieDetails;
