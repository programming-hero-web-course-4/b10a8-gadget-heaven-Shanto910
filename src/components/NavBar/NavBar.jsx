import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

const NavBar = () => {
	return (
		//nav: className="mx-[30px] mt-[30px] bg-[#9538E2] rounded-t-[32px]"
		<nav className="bg-white">
			<ul className="max-w-[1280px] mx-auto flex justify-between items-center py-6 px-[30px]">
				<li>
					<Link to={'/'}>
						<span className="font-bold text-xl">Gadget Heaven</span>
					</Link>
				</li>
				<li>
					<ul className="font-medium text-[#0b0b0bb3] flex gap-12">
						<li>
							<NavLink to={'/'}>Home</NavLink>
						</li>
						<li>
							<NavLink to={'/statistics'}>Statistics</NavLink>
						</li>
						<li>
							<NavLink to={'/dashboard'}>Dashboard</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<div className="flex gap-4">
						<Link to={'/cart'}>
							<button className="text-[#3a3a3a] bg-white text-xl p-2 border border-[#0b0b0b1a] rounded-full">
								<AiOutlineShoppingCart />
							</button>
						</Link>
						<Link to={'/wishlist'}>
							<button className="text-[#3a3a3a] bg-white text-xl p-2 border border-[#0b0b0b1a] rounded-full">
								<AiOutlineHeart />
							</button>
						</Link>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
