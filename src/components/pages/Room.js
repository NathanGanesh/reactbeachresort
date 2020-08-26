import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-11.jpeg';
import PropTypes from 'prop-types';

export default function Room({ room }) {
	const { name, price, images, slug } = room;

	return (
		<article className="room">
			<div className="img-container">
				<img src={images[0] || defaultImage} alt="single room image" />
				<div className="price-top">
					<h6>${price}</h6>
					<p>Per night</p>
				</div>
				<Link to={`/rooms/${slug}`} className="btn-primary room-link">
					Features
				</Link>
			</div>
			<p className="room-info">{name}</p>
		</article>
	);
}

Room.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired
	})
};
