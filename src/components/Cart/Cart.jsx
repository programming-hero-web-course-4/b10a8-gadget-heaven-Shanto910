import PropTypes from 'prop-types';
import { AiOutlineControl } from 'react-icons/ai';
import CartItem from '../CartItem/CartItem';
import { removeFromCartList } from '../../utility/addToDB';

const Cart = ({ cartList, handleSortByPrice }) => {
	const productPrices = cartList.map(i => i.price);
	const initPrice = 0;
	const totalPrice = productPrices.reduce((a, c) => a + c, initPrice);
	const price = (Math.round(totalPrice * 100) / 100).toFixed(2);

	const handlePurchase = () => {
		removeFromCartList();
	};

	return (
		<div className="max-w-[1280px] mx-auto">
			<div className="flex items-center gap-6 mt-12 mb-8 leading-none">
				<h3 className="grow font-bold text-[24px]">Cart</h3>
				<span className="font-bold text-[24px]">Total Cost: {price}</span>
				<button
					onClick={handleSortByPrice}
					className="border text-[18px] border-[#9538E2] text-[#9538E2] flex items-center gap-2 py-[14px] px-[22px] rounded-full">
					<span className="font-semibold">Sort by Price</span>
					<AiOutlineControl />
				</button>
				<button
					onClick={handlePurchase}
					className="text-[18px] text-white bg-[#9538E2] py-[14px] px-[22px] rounded-full">
					Purchase
				</button>
			</div>
			<div className="flex flex-col gap-6 leading-normal">
				{cartList.map(item => (
					<CartItem key={item.product_id} item={item} />
				))}
			</div>
		</div>
	);
};

Cart.propTypes = {
	cartList: PropTypes.array,
	handleSortByPrice: PropTypes.func,
};

export default Cart;
