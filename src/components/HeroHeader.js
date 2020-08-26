import React from 'react';
import image1 from './images/defaultBcg.jpeg';

export default function HeroHeader(props) {
	return (
		<div className="hero">
			<div className="hero-component">
				<h1>{props.title}</h1>
				<p>{props.descriptions}</p>
				<a href={props.href}>
					<button>{props.button}</button>
				</a>
			</div>
			<img id="hero-image" src={props.img} alt="logo" />
		</div>
	);
}

HeroHeader.defaultProps = {
	img: image1
};
