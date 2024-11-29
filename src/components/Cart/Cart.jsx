import PropTypes from 'prop-types';
import { AiOutlineControl } from 'react-icons/ai';
import CartItem from '../CartItem/CartItem';
import { useState } from 'react';
import { removeFromCartList } from '../../utility/addToDB';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cartList, handleSortByPrice }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	const productPrices = cartList.map(i => i.price);
	const initPrice = 0;
	const totalPrice = productPrices.reduce((a, c) => a + c, initPrice);
	const price = (Math.round(totalPrice * 100) / 100).toFixed(2);

	const handlePurchase = () => {
		if (price <= 0) {
			toast.error('Your cart is empty', {
				position: 'bottom-left',
			});
		} else {
			removeFromCartList();
			setIsModalOpen(true);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		navigate('/');
	};

	return (
		<div className="max-w-[1280px] mx-auto">
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
					<div className="bg-white p-8 rounded-2xl shadow-xl leading-none flex flex-col items-center">
						<img
							className="h-[72px] w-[72px] mb-[24px]"
							src="assets/Group.png"
							alt=""
						/>
						<h3 className="text-[24px] font-bold">Payment Successful</h3>
						<hr className="my-3 w-full border-t" />
						<p className="text-[#09080F99] mb-2">Thanks for purchasing.</p>
						<span className="text-[#09080F99] mb-4">Total Price: ${price}</span>
						<button
							onClick={handleCloseModal}
							className="py-2 bg-[#09080F0d] rounded-full w-full font-semibold">
							Close
						</button>
					</div>
				</div>
			)}

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
			<ToastContainer />
		</div>
	);
};

Cart.propTypes = {
	cartList: PropTypes.array,
	handleSortByPrice: PropTypes.func,
};

export default Cart;
