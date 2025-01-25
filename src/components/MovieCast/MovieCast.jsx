import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_TOKEN } from '../../api';
import css from './MovieCast.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        {
          headers: {
            Authorization: API_TOKEN,
          },
        }
      );
      setCast(response.data.cast);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <h2 className={css.castTitle}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.cast_id} className={css.castItem}>
            {actor.profile_path && (
              <img
                src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                alt={actor.name}
                className={css.castImage}
              />
            )}
            <p className={css.castInfo}>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
