import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CartItem = ({ item }) => {
	const { product_title, product_image, price, description } = item;
	return (
		<div className="flex p-8 bg-white rounded-2xl gap-8 items-center">
			<div className="max-w-[200px] max-h-32 flex">
				<img className="rounded-xl object-cover" src={product_image} alt="" />
			</div>
			<div className="grow">
				<h3 className="text-[24px] font-semibold mb-[18px]">{product_title}</h3>
				<p className="text-[#09080F99] text-[18px] mb-4 ">{description}</p>
				<span className="text-[20px] font-semibold text-[#09080Fcc]">Price: $ {price}</span>
			</div>
			<button className="text-[#FF5861] text-[36px] self-start">
				<AiOutlineCloseCircle />
			</button>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.object,
};

export default CartItem;
