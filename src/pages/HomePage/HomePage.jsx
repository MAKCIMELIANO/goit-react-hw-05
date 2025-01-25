import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_TOKEN } from '../../api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          headers: {
            Authorization: API_TOKEN,
          },
        }
      );
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.containerHomePage}>
      <h1 className={css.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
