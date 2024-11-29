import { Link, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="grid place-content-center place-items-center h-screen gap-3">
			<Helmet>
				<title>404 | Gadget Heaven</title>
			</Helmet>
			<h1 className="font-bold text-4xl">Oops!</h1>
			<p className="text-xl">Sorry, an unexpected error has occurred.</p>
			<span className="text-xl">{error.statusText || error.message}</span>
			<Link to={'/'} className="px-8 py-4 bg-[#9538E2] rounded-full text-white">
				Back to Home Page
			</Link>
		</div>
	);
};

export default ErrorPage;
