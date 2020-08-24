import React from 'react';

export default function HeroHeader() {
	return (
		<div className="hero">
			<div className="hero-component">
				<h1>Luxurious Rooms</h1>
				<p>Deluxe Rooms Starting At $299</p>
				<button>Our rooms</button>
			</div>
			<img id="hero-image" src={require('./images/defaultBcg.jpeg')} alt="logo" />
		</div>
	);
}
