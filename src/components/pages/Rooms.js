import React from 'react';
import Navbar from '../Navbar';
import HeroHeader from '../HeroHeader';
import RoomContainer from '../RoomContainer';

export default function Rooms() {
	return (
		<div>
			<Navbar />
			<HeroHeader title="Our Rooms" href="/" button="return home" />
			<RoomContainer />
		</div>
	);
}
