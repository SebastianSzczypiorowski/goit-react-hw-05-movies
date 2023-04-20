import { useContext, useEffect, useState } from 'react';
import { idContext } from './movieDetails';

import axios from 'axios';
const Reviews = () => {
  const movieId = useContext(idContext);
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(URL);
      const data = response.data;
      setReviews(data.results);
    };
    fetchReviews();
  }, [URL]);

  async function removeHtmlTags(text) {
    return text.replace(/<[^>]+>/g, '');
  }
  return (
    <>
      {reviews.length !== 0
        ? reviews.map(review => {
            return (
              <article key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{removeHtmlTags(review.content)}</p>
              </article>
            );
          })
        : 'There are no reviews'}
    </>
  );
};

export default Reviews;
