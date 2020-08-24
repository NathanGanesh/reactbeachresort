import React from 'react';

export default function SingleRoom(props) {
	return (
		<div>
			<div className="single-room">
				<p className="room-price">{props.price}</p>
				<a href="_blank">features</a>
				<p className="room-title">{props.name}</p>
				<img id="room-image" src={require('./images/room-12.jpeg')} alt="logo" />
			</div>
		</div>
	);
}
