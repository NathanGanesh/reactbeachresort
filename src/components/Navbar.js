import React from 'react';

export default function Navbar() {
	return (
		<nav className="nav-bar">
			<img src={require('./images/logo.svg')} alt="logo" />

			<div>
				<a href="/html/">Home</a>
				<a href="/css/">Rooms</a>
			</div>
		</nav>
	);
}
