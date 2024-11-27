import Gadgets from '../Gadgets/Gadgets';
import GadgetsTab from '../GadgetsTab/GadgetsTab';

const GadgetsSection = () => {
	return (
		<section className="py-24 max-w-[1280px] mx-auto">
			<h2 className="font-bold text-[40px] text-center">Explore Cutting-Edge Gadgets</h2>
			<div className="grid grid-cols-5 gap-6">
				<GadgetsTab />
				<Gadgets />
			</div>
		</section>
	);
};

export default GadgetsSection;
