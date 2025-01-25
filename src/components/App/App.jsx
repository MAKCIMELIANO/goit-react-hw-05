import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Navigation from '../Navigation/Navigation';
import { Oval } from 'react-loader-spinner';

// Асинхронное завантаження компонентів
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense
        fallback={
          <div className={css.loaderContainer}>
            <Oval
              height={80}
              width={80}
              color="#007bff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
