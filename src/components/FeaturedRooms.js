import React, { Component } from 'react';
import { RoomContext } from '../Context.js';
import Loading from './Loading';
import Room from './pages/Room';

export default class FeaturedRooms extends Component {
	static contextType = RoomContext;
	render() {
		let { loading, featuredRooms: rooms } = this.context;

		rooms = rooms.map((room) => {
			return <Room key={room.id} room={room} />;
		});

		return (
			<section className="featured-rooms">
				<div>
					<h2 id="services-title">Featured Rooms</h2>
				</div>
				<div className="featured-rooms-center">{loading ? <Loading /> : rooms}</div>
			</section>
		);
	}
}
