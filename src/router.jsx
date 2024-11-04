import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import About from './pages/About';
import Error from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/accommodation/:id',
        caseSensitive: true,
        element: <Accommodation />,
      },
      {
        path: '/about',
        caseSensitive: true,
        element: <About />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
