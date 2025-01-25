import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import { API_TOKEN } from '../../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function MoviesPage() {
  const [query, setQuery] = useState(() => localStorage.getItem('query') || '');
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie`,
            {
              headers: {
                Authorization: API_TOKEN,
              },
              params: {
                query: query,
              },
            }
          );
          if (response.data.results.length === 0) {
            toast.error('No movies found for your search query.');
          }
          setMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching movies:', error);
          toast.error('An error occurred while fetching data.');
        }
      };

      fetchMovies();
    }
  }, [query]);

  useEffect(() => {
    localStorage.setItem('query', query);
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [query, movies]);

  const initialValues = {
    query: query,
  };

  const validationSchema = Yup.object({
    query: Yup.string().required('Please enter a search query.'),
  });

  const handleSearch = (values, { setSubmitting }) => {
    const newQuery = values.query.trim();
    if (newQuery !== query) {
      setMovies([]);
    }
    setQuery(newQuery);
    setSubmitting(false);
  };

  return (
    <div>
      <ToastContainer />
      <h1>Search Movies</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSearch}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="query" placeholder="Enter movie name" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
            <ErrorMessage
              name="query"
              component="div"
              style={{ color: 'red' }}
            />
          </Form>
        )}
      </Formik>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
