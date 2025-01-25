import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, Route, Routes, useLocation } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { API_TOKEN } from '../../api';

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
    <div>
      {movie && (
        <>
          <Link to={previousLocation}>Go back</Link>
          <h1>{movie.title}</h1>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <Link
            to={`/movies/${movieId}/cast`}
            state={{ from: previousLocation }}
          >
            Cast
          </Link>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{ from: previousLocation }}
          >
            Reviews
          </Link>
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
