import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, Route, Routes, useLocation } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { API_TOKEN } from '../../api';
import css from './MovieDetailsPage.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  const previousLocation = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers: {
            Authorization: API_TOKEN,
          },
        }
      );
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieDetailsContainer}>
      {movie && (
        <>
          <Link to={previousLocation} className={css.goBackLink}>
            Go back
          </Link>
          <h1 className={css.movieTitle}>{movie.title}</h1>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className={css.moviePoster}
          />
          <p className={css.movieOverview}>{movie.overview}</p>
          <div className={css.linksContainer}>
            <Link
              to={`/movies/${movieId}/cast`}
              state={{ from: previousLocation }}
              className={css.castLink}
            >
              Cast
            </Link>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: previousLocation }}
              className={css.reviewsLink}
            >
              Reviews
            </Link>
          </div>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
