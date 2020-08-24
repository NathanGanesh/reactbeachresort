import React from 'react';

export default function ServicesComponent(props) {
	return (
		<div className="service-item">
			<h3>
				<props.logo />
			</h3>
			<h2>{props.title}</h2>
			<h4>{props.descriptions}</h4>
		</div>
	);
}
