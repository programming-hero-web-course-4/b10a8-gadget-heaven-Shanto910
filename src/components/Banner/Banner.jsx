import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<>
			<section className="banner bg-[#9538E2] flex flex-col items-center px-[30px] py-12 mx-[30px]  relative">
				<h1 className="font-bold text-[56px] text-white text-center max-w-[35ch] leading-tight	mb-6">
					Upgrade Your Tech Accessorize with Gadget Heaven Accessories
				</h1>
				<p className="text-white text-center max-w-[78ch] mb-8">
					Explore the latest gadgets that will take your experience to the next level.
					From smart devices to the coolest accessories, we have it all!
				</p>
				<Link
					to={'/dashboard'}
					className="font-bold text-xl text-[#9538E2] px-[30px] py-[15px] rounded-full bg-white inline-block">
					Shop Now
				</Link>
			</section>
			<div className="flex mx-auto p-6 bg-[#ffffff4d] max-w-[1110px] max-h-[610px] border-[3px] border-white rounded-[32px]">
				<img className="rounded-3xl object-cover" src="/public/assets/banner.jpg" alt="" />
			</div>
		</>
	);
};

export default Banner;
