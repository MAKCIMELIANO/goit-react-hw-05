import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import { API_TOKEN } from '../../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './MoviesPage.module.css';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

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
    setSearchParams({ query: newQuery });
    setSubmitting(false);
  };

  return (
    <div className={css.container}>
      <ToastContainer />
      <h1 className={css.title}>Search Movies</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSearch}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="query"
              placeholder="Enter movie name"
              className={css.input}
            />
            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Search
            </button>
            <ErrorMessage
              name="query"
              component="div"
              className={css.errorMessage}
            />
          </Form>
        )}
      </Formik>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
