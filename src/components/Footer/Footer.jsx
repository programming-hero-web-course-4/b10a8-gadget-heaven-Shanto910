const Footer = () => {
	return (
		<footer className="bg-white mt-24">
			<div className=" flex flex-col max-w-[1280px] mx-auto py-24 px-[30px]">
				<div className="flex flex-col gap-3 text-center pb-8 border-b border-[#09080F1a]">
					<h2 className="font-bold text-[32px] leading-none">Gadget Heaven</h2>
					<p className="font-medium text-[#09080F99]">
						Leading the way in cutting-edge technology and innovation.
					</p>
				</div>
				<div className="flex justify-center gap-40 mt-8 text-center">
					<nav className="flex flex-col">
						<h6 className="font-bold text-lg text-[#09080F] mb-3">Services</h6>
						<a className="text-[#09080F99] leading-loose">Product Support</a>
						<a className="text-[#09080F99] leading-loose">Order Tracking</a>
						<a className="text-[#09080F99] leading-loose">Shipping & Delivery</a>
						<a className="text-[#09080F99] leading-loose">Returns</a>
					</nav>
					<nav className="flex flex-col">
						<h6 className="font-bold text-lg text-[#09080F] mb-3">Company</h6>
						<a className="text-[#09080F99] leading-loose">About Us</a>
						<a className="text-[#09080F99] leading-loose">Careers</a>
						<a className="text-[#09080F99] leading-loose">Contact</a>
					</nav>
					<nav className="flex flex-col">
						<h6 className="font-bold text-lg text-[#09080F] mb-3">Legal</h6>
						<a className="text-[#09080F99] leading-loose">Terms of Service</a>
						<a className="text-[#09080F99] leading-loose">Privacy Policy</a>
						<a className="text-[#09080F99] leading-loose">Cookie Policy</a>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
