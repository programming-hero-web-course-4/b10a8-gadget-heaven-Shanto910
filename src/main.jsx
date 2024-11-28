import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
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
