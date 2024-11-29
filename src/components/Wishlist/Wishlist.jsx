import PropTypes from 'prop-types';
import WishItem from '../WishItem/WishItem';

const Wishlist = ({ wishList }) => {
	return (
		<div className="max-w-[1280px] mx-auto">
			<div className="flex items-center gap-6 mt-12 mb-8 leading-none">
				<h3 className="grow font-bold text-[24px]">Wishlist</h3>
			</div>
			<div className="flex flex-col gap-6 leading-normal">
				{wishList.map(item => (
					<WishItem key={item.product_id} item={item} />
				))}
			</div>
		</div>
	);
};

Wishlist.propTypes = {
	wishList: PropTypes.array,
};

export default Wishlist;
