import { useContext, useEffect, useState } from 'react';
import { idContext } from './movieDetails';
import axios from 'axios';
import css from './movie-details.module.css';

const Cast = () => {
  const movieId = useContext(idContext);
  const [cast, setCast] = useState([]);

  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    const fetchMovieCast = async () => {
      const response = await axios.get(URL);
      const data = response.data;
      setCast(data.cast);
      console.log(data);
    };
    fetchMovieCast();
  }, [URL]);
  // 1
  return (
    <>
      {cast.map(actor => {
        const profileUrl = `https://image.tmdb.org/t/p/w185${actor.profile_path}`;
        return (
          <article key={actor.id} className={css.actor}>
            <img src={profileUrl} alt={`${actor.name} profile`} />
            <div className={css.details}>
              <p>Actor: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Cast;
