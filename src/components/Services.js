import React from 'react';
import ServicesComponent from './ServicesComponent';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default function Services() {
	return (
		<div class="services">
			<h2 id="services-title">Services</h2>
			<div className="services-component">
				<ServicesComponent
					logo={FaCocktail}
					title="Free Cocktails"
					descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur?"
				/>
				<ServicesComponent
					logo={FaHiking}
					title="Endless Hiking"
					descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur?"
				/>
				<ServicesComponent
					logo={FaShuttleVan}
					title="Free Shuttle"
					descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur?"
				/>
				<ServicesComponent
					logo={FaBeer}
					title="Strongest Beer"
					descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur?"
				/>
			</div>
		</div>
	);
}
