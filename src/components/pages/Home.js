import React from 'react';
import Navbar from '../Navbar';
import HeroHeader from '../HeroHeader';
import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms';
import Button from '../StyledHero';

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroHeader
				image="../images/room-10.jpeg"
				title="Luxurious Rooms"
				descriptions="Deluxe Rooms Starting At $299"
				button="Our rooms"
				href="/rooms"
			/>
			<Services />
			<FeaturedRooms />
		</div>
	);
}
