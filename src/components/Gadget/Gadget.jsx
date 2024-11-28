import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Gadget = ({ gadget }) => {
	const { product_id, product_title, product_image, price } = gadget;
	return (
		<div className="p-5 rounded-2xl bg-white flex flex-col items-start">
			<div className=" max-h-[180px] mb-6 flex">
				<img className="rounded-xl object-cover" src={product_image} alt="" />
			</div>
			<h3 className="font-semibold text-[#09080F] text-[24px] mb-3">{product_title}</h3>
			<span className="text-[#09080F99] font-medium text-[20px] mb-4 grow">
				Price: ${price}
			</span>
			<Link
				to={`/productdetails/${product_id}`}
				className="px-[22px] py-[14px] rounded-full border border-[#9538E2] text-[#9538E2] font-semibold text-[18px]">
				View Details
			</Link>
		</div>
	);
};

Gadget.propTypes = {
	gadget: PropTypes.object,
};

export default Gadget;
