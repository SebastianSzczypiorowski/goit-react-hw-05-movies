import { Routes, Route, NavLink } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import css from './header.module.css';

const Movies = lazy(() => import('./Movies/movies'));
const MovieDetails = lazy(() => import('./MovieDetails/movieDetails'));
const Home = lazy(() => import('./Home/home'));
const Cast = lazy(() => import('./MovieDetails/cast'));
const Reviews = lazy(() => import('./MovieDetails/reviews'));

export const App = () => {
  return (
    <div>
      <nav className={css.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
