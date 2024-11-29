import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
	const [gadgets, setGadgets] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		fetch('/Gadgets.json')
			.then(res => res.json())
			.then(data => {
				if (category) {
					setGadgets(data.filter(gadget => gadget.category === category));
				} else {
					setGadgets(data);
				}
			});
	}, [category]);

	return (
		<div className="col-span-4 grid grid-cols-3 gap-6">
			{gadgets.length === 0 ? (
				<p className="text-3xl col-span-3 grid place-content-center place-items-center">
					No data to show in this category.
				</p>
			) : (
				gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)
			)}
		</div>
	);
};

export default Gadgets;
