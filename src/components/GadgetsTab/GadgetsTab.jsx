import { NavLink } from 'react-router-dom';

const GadgetsTab = () => {
	return (
		<div className="sidebar flex flex-col p-6 bg-white gap-6 rounded-2xl max-h-fit">
			<NavLink to={'/'} className="rounded-full py-[14px] pl-[22px] bg-[#09080F0d]">
				All Products
			</NavLink>
			<NavLink to={'/laptops'} className="rounded-full py-[14px] pl-[22px] bg-[#09080F0d]">
				Laptops
			</NavLink>
			<NavLink
				to={'/smartphones'}
				className="rounded-full py-[14px] pl-[22px] bg-[#09080F0d]">
				Smartphones
			</NavLink>
			<NavLink
				to={'/smartwatches'}
				className="rounded-full py-[14px] pl-[22px] bg-[#09080F0d]">
				Smartwatches
			</NavLink>
		</div>
	);
};

export default GadgetsTab;
