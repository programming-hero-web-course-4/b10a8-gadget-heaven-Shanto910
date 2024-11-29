import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const Root = () => {
	return (
		<div>
			<Helmet>
				<title>Home | Gadget Heaven</title>
			</Helmet>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
