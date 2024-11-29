import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useLocation } from 'react-router';

const NavBar = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/' || location.pathname.startsWith('/categories');

	return (
		<nav
			className={`${
				isHomePage ? 'mx-[30px] mt-[30px] bg-[#9538E2] rounded-t-[32px]' : 'bg-white'
			}`}>
			<ul className="max-w-[1280px] mx-auto flex justify-between items-center py-6 px-[30px]">
				<li>
					<Link to={'/'}>
						<span
							className={`font-bold text-xl ${
								isHomePage ? 'text-white' : 'text-[#0b0b0b]'
							}`}>
							Gadget Heaven
						</span>
					</Link>
				</li>
				<li>
					<ul
						className={`font-medium ${
							isHomePage ? 'text-white' : 'text-[#0b0b0bb3]'
						} flex gap-12`}>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'font-bold underline text-white' : ''
								}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={'/statistics'}>Statistics</NavLink>
						</li>
						<li>
							<NavLink to={'/dashboard'}>Dashboard</NavLink>
						</li>
						<li>
							<NavLink to={'/support'}>Support</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<div className="flex gap-4">
						<button className="text-[#3a3a3a] bg-white text-xl p-2 border border-[#0b0b0b1a] rounded-full">
							<AiOutlineShoppingCart />
						</button>
						<button className="text-[#3a3a3a] bg-white text-xl p-2 border border-[#0b0b0b1a] rounded-full">
							<AiOutlineHeart />
						</button>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
