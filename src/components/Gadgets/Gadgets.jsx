import { useEffect, useState } from 'react';

const Gadgets = () => {
	const [gadgets, setGadgets] = useState([]);
	useEffect(() => {
		fetch('/public/Gadgets.json')
			.then(res => res.json())
			.then(data => setGadgets(data));
	}, []);
	return (
		<div className="col-span-4">
			<h1>hello {gadgets.length}</h1>
		</div>
	);
};

export default Gadgets;
