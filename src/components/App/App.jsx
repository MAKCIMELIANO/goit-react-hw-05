import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Blog from '../../pages/Blog';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout/Layout';
import SinglePage from '../../pages/SinglePage';

const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:id" element={<SinglePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
