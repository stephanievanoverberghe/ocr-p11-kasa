import { createBrowserRouter, Navigate } from 'react-router-dom';
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
        path: '/404',
        element: <Error />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);
