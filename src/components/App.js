import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HeroHeader from './HeroHeader';
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';
function App() {
	return (
		<div>
			<Navbar />
			<HeroHeader />
			<Services />
			<FeaturedRooms />
		</div>
	);
}

export default App;
