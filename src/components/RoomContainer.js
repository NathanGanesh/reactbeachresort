import React from 'react';
import RoomFilter from './RoomFilter';
import RoomsList from './RoomList';
import { RoomConsumer, withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({ context }) {
	const { loading, sortedRooms, rooms } = context;

	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	} else {
		return (
			<div>
				<RoomFilter rooms={rooms} />
				<RoomsList rooms={sortedRooms} />
			</div>
		);
	}
}

export default withRoomConsumer(RoomContainer);

// export default function RoomsContainer() {
// 	return (
// 		<RoomConsumer>
// 			{(value) => {
// 				const { loading, sortedRooms, rooms } = value;
// 				if (loading) {
// 					return (
// 						<div>
// 							<Loading />
// 						</div>
// 					);
// 				} else {
// 					return (
// 						<div>
// 							hello form rooms container
// 							<RoomFilter rooms={rooms} />
// 							<RoomsList rooms={sortedRooms} />
// 						</div>
// 					);
// 				}
// 			}}
// 		</RoomConsumer>
// 	);
// }
