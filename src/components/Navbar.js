import React from 'react';

export default function Navbar() {
	return (
		<nav className="nav-bar">
			<a href="/">
				<img src={require('./images/logo.svg')} alt="logo" />
			</a>
			<div>
				<a href="/">Home</a>
				<a href="/rooms/">Rooms</a>
			</div>
		</nav>
	);
}
