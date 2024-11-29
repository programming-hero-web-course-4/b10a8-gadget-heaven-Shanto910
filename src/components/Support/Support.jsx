import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

const Support = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleOpen = index => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div>
			<Helmet>
				<title>Support | Gadget Heaven</title>
			</Helmet>
			<div className="bg-[#9538E2] flex flex-col gap-4 py-8 text-center">
				<h2 className="font-bold text-[32px] text-white">Support</h2>
				<p className="text-white max-w-[78ch] mx-auto">
					We are here to help! If you have any issues, please do not hesitate to contact
					us.
				</p>
			</div>

			<div className="max-w-[1280px] mx-auto p-8 mt-12">
				<h2 className="text-3xl font-bold text-center text-[#09080F] mb-8">
					Frequently Asked Questions
				</h2>
				<div className="space-y-6">
					<div className="border-b border-[#E5E5E5]">
						<div className="flex justify-between items-center py-4">
							<h3 className="text-xl font-semibold">How do I track my order?</h3>
							<button
								className="text-[#9538E2] focus:outline-none"
								onClick={() => toggleOpen(0)}>
								<FaAngleDown
									className={`w-6 h-6 transform transition-all ${
										openIndex === 0 ? 'rotate-180' : ''
									}`}
								/>
							</button>
						</div>
						{openIndex === 0 && (
							<p className="text-[#09080F99] text-[20px]">
								You will receive an email with tracking information once your order
								has shipped.
							</p>
						)}
					</div>

					<div className="border-b border-[#E5E5E5]">
						<div className="flex justify-between items-center py-4">
							<h3 className="text-xl font-semibold">Can I return a product?</h3>
							<button
								className="text-[#9538E2] focus:outline-none"
								onClick={() => toggleOpen(1)}>
								<FaAngleDown
									className={`w-6 h-6 transform transition-all ${
										openIndex === 1 ? 'rotate-180' : ''
									}`}
								/>
							</button>
						</div>
						{openIndex === 1 && (
							<p className="text-[#09080F99] text-[20px]">
								Yes, you can return items within 30 days of receiving them. Please
								ensure the product is in its original condition.
							</p>
						)}
					</div>

					<div className="border-b border-[#E5E5E5]">
						<div className="flex justify-between items-center py-4">
							<h3 className="text-xl font-semibold">
								What should I do if I received a damaged item?
							</h3>
							<button
								className="text-[#9538E2] focus:outline-none"
								onClick={() => toggleOpen(2)}>
								<FaAngleDown
									className={`w-6 h-6 transform transition-all ${
										openIndex === 2 ? 'rotate-180' : ''
									}`}
								/>
							</button>
						</div>
						{openIndex === 2 && (
							<p className="text-[#09080F99] text-[20px]">
								If you receive a damaged item, please contact our support team
								immediately with a picture of the damage.
							</p>
						)}
					</div>

					<div className="border-b border-[#E5E5E5]">
						<div className="flex justify-between items-center py-4">
							<h3 className="text-xl font-semibold">
								How can I contact customer support?
							</h3>
							<button
								className="text-[#9538E2] focus:outline-none"
								onClick={() => toggleOpen(3)}>
								<FaAngleDown
									className={`w-6 h-6 transform transition-all ${
										openIndex === 3 ? 'rotate-180' : ''
									}`}
								/>
							</button>
						</div>
						{openIndex === 3 && (
							<p className="text-[#09080F99] text-[20px]">
								For any inquiries, you can email us at support@gadgetheaven.com.
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;
