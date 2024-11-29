import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDB';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
	const [cartList, setCartList] = useState([]);
	const [wishList, setWishList] = useState([]);
	const [isActive, setIsActive] = useState({
		cart: true,
	});
	const product = useLoaderData();

	useEffect(() => {
		const storedCartList = getStoredCartList();

		const cartItemList = storedCartList.map(id => {
			return product.find(item => item.product_id === id);
		});

		setCartList(cartItemList);
	}, [product]);

	useEffect(() => {
		const storedWishList = getStoredWishList();

		const wishItemList = product.filter(item => storedWishList.includes(item.product_id));

		setWishList(wishItemList);
	}, [product]);

	const handleIsActive = status => {
		if (status === 'cart') {
			setIsActive({
				cart: true,
			});
		} else {
			setIsActive({
				cart: false,
			});
		}
	};
	const handleSortByPrice = () => {
		const sort = [...cartList].sort((a, b) => b.price - a.price);
		setCartList(sort);
	};

	const clearCart = () => {
		setCartList([]);
	};

	return (
		<section>
			<Helmet>
				<title>DashBoard | Gadget Heaven</title>
			</Helmet>
			<div className="bg-[#9538E2] flex flex-col gap-4 py-8 text-center">
				<h2 className="font-bold text-[32px] text-white">Dashboard</h2>
				<p className="text-white max-w-[78ch] mx-auto">
					Explore the latest gadgets that will take your experience to the next level.
					From smart devices to the coolest accessories, we have it all!
				</p>
			</div>
			<div className="bg-[#9538E2] pb-8 flex justify-center gap-6 leading-none">
				<button
					onClick={() => handleIsActive('cart')}
					className={`${
						isActive.cart
							? 'text-[#9538E2] bg-white font-bold'
							: 'text-white border-white border font-medium'
					} px-16 py-4 rounded-full`}>
					Cart
				</button>
				<button
					onClick={() => handleIsActive('wishlist')}
					className={`${
						isActive.cart
							? 'text-white border-white border font-medium'
							: 'text-[#9538E2] bg-white font-bold'
					} px-16 py-4 rounded-full`}>
					Wishlist
				</button>
			</div>

			{isActive.cart ? (
				<Cart
					cartList={cartList}
					handleSortByPrice={handleSortByPrice}
					clearCart={clearCart}
				/>
			) : (
				<Wishlist wishList={wishList} />
			)}
		</section>
	);
};

export default Dashboard;
