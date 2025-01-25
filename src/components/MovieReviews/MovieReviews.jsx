import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_TOKEN } from '../../api';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        {
          headers: {
            Authorization: API_TOKEN,
          },
        }
      );
      setReviews(response.data.results);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>{review.author}</h3>
              <p className={css.reviewContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviewsMessage}>
          No reviews available for this movie.
        </p>
      )}
    </div>
  );
}

export default MovieReviews;
