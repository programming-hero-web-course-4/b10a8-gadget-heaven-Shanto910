import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/categories/:category',
				element: <Home />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
				loader: () => fetch('/Gadgets.json'),
			},
			{
				path: '/statistics',
				element: (
					<div className="text-3xl p-6 h-40 text-center mt-24 grid place-content-center place-items-center">
						Beep Boop! Nothing to show here yet...
					</div>
				),
			},
			{
				path: '/productdetails/:productID',
				element: <ProductDetails />,
				loader: () => fetch('/Gadgets.json'),
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
