import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { addToStoredCartList, addToStoredWishList } from '../../utility/addToDB';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const ProductDetails = () => {
	const { productID } = useParams();
	const data = useLoaderData();

	const product = data.find(product => product.product_id === productID);

	const {
		product_image,
		product_title,
		price,
		availability,
		description,
		specification,
		rating,
	} = product;

	const ratingStars = {
		size: 24,
		isHalf: true,
		char: '★',
		value: rating,
		edit: false,
	};

	const handleCart = id => {
		if (availability) {
			toast.success('Product added to your cart', {
				position: 'bottom-left',
			});
			addToStoredCartList(id);
		} else {
			toast.error('This product is out of stock', {
				position: 'bottom-left',
			});
		}
	};

	const handleWish = id => {
		toast.success('Product added to your wishlist', {
			position: 'bottom-left',
		});
		addToStoredWishList(id);
	};

	return (
		<section>
			<Helmet>
				<title>Details | Gadget Heaven</title>
			</Helmet>
			<div className="pd-bg bg-[#9538E2] flex flex-col gap-4 py-8 text-center relative">
				<h2 className="font-bold text-[32px] text-white">Product Details</h2>
				<p className="text-white max-w-[78ch] mx-auto">
					Explore the latest gadgets that will take your experience to the next level.
					From smart devices to the coolest accessories, we have it all!
				</p>
			</div>
			<div className="max-w-[1280px] p-8 rounded-3xl bg-white flex gap-8 mx-auto">
				<div className="flex max-w-[424px]">
					<img className="object-cover rounded-2xl" src={product_image} alt="" />
				</div>
				<div className="flex flex-col gap-4 max-h-fit">
					<div className="flex flex-col gap-3 leading-none">
						<h3 className="font-semibold text-[28px]">{product_title}</h3>
						<span className="font-semibold text-[20px] text-[#09080Fcc]">
							Price: ${price}
						</span>
					</div>
					<span
						className={`px-[14px] py-[7px] ${
							availability
								? 'text-[#309C08] border-[#309C08] bg-[#309C081a]'
								: 'text-[#FF5861] border-[#FF5861] bg-[#FF58611a]'
						} border  rounded-full leading-none max-w-fit font-medium`}>{`${
						availability ? 'In Stock' : 'Stock Out'
					}`}</span>
					<p className="text-[#09080F99] text-[18px]">{description}</p>
					<div className="flex flex-col gap-3">
						<span className="font-bold text-[18px]">Specification</span>
						<ul>
							{specification.map((item, idx) => (
								<li
									key={idx}
									className="text-[#09080F99] text-[18px] leading-relaxed">{`${
									idx + 1
								}. ${item}`}</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-2">
						<span className="font-bold text-[18px]">Rating ⭐</span>
						<div className="flex gap-4 items-center">
							<ReactStars {...ratingStars} />
							<span className="text-[#09080FCC] font-medium bg-[#09080F0d] px-[14px] py-[4px] rounded-full">
								{rating}
							</span>
						</div>
					</div>
					<div className="flex gap-4">
						<button
							onClick={() => handleCart(productID)}
							className="text-white bg-[#9538E2] text-xl px-[22px] py-3 border rounded-full flex items-center gap-2 leading-none">
							<span className="text-[18px] font-bold">Add To Card</span>
							<AiOutlineShoppingCart />
						</button>
						<button
							onClick={() => handleWish(productID)}
							className="text-[#3a3a3a] bg-white text-xl p-3 border border-[#0b0b0b1a] rounded-full">
							<AiOutlineHeart />
						</button>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
};

export default ProductDetails;
