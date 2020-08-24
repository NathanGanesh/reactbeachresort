import React from 'react';
import SingleRoom from './SingleRoom';
export default function FeaturedRooms() {
	return (
		<div>
			<h2 id="featured-title">Featured Rooms</h2>
			<div className="featured-rooms">
				<SingleRoom price="550" name="Family Deluxe" image="src/components/images/details-1.jpeg" />
				<SingleRoom price="400" name="Double Deluxe" image="src/components/images/details-1.jpeg" />
				<SingleRoom price="300" name="Single Deluxe" image="src/components/images/details-1.jpeg" />
			</div>
		</div>
	);
}
