import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import HeroHeader from '../HeroHeader';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../Context';
import Navbar from '../Navbar';
import StyledHero from '../StyledHero';

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		};
	}
	//possible to load your shit in here to
	// componentDidMount() {}

	static contextType = RoomContext;
	render() {
		let { loading, getRoom } = this.context;
		let room = getRoom(this.state.slug);

		if (!room) {
			return (
				<div>
					<Navbar />
					<div className="error">
						<h3>No such room could be found</h3>
						<Link to="/rooms" className="btn-primary">
							back to rooms
						</Link>
					</div>
				</div>
			);
		}
		const { name, images, description, capacity, size, price, extras, breakfast, pets } = room;
		const [ mainImg, ...defaultImg ] = images;
		console.log(mainImg);

		return (
			<div>
				<HeroHeader
					title={`${name} room`}
					href="/rooms"
					button="back to rooms"
					img={mainImg || this.state.defaultBcg}
				/>

				<section className="single-room">
					<div className="single-room-images">
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={name} />;
						})}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>Details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>Info</h3>
							<h6>price : ${price}</h6>
							<h6>size: ${size}</h6>
							<h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
						</article>
						<h6>{pets ? 'pets allowed' : 'pets not allowed'}</h6>
						<h6>{breakfast && 'free breakfast included'}</h6>
					</div>
				</section>
				<section className="room-extras">
					<h6>extras</h6>
					<ul className="extras">
						{extras.map((item, index) => {
							return <li key={index}>- {item}</li>;
						})}
					</ul>
				</section>
			</div>
		);
	}
}
