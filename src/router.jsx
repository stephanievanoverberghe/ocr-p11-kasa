import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
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
                path: '/accomodation',
                caseSensitive: true,
                element: <Accomodation />,
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
