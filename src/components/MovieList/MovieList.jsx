import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.link}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
