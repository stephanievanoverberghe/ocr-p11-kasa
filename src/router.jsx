import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';
import Error from './pages/Error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/accomodation',
                element: <Accomodation />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
]);
