import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { RoomContext, withRoomConsumer } from "../Context";


function RoomsContainer({context}) {

    // const context = useContext(RoomContext);
    
  const { loading, sortedRooms, rooms } = context;

// //   console.log('Rooms Container ' + {context});
//   console.log(context);
//   console.log(rooms);
//   console.log(loading);
//   console.log(sortedRooms);


  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);


// import React, { useContext } from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer, RoomContext } from '../Context';
// import Loading from './Loading';

// const RoomsContainer = () => {

//     const value = useContext(RoomContext);

//   return (
//     <>
//     <RoomConsumer>
//         {
//             value => {

//                 const {loading,sortedRooms,rooms} = value;
//                 console.log('Value ' + value);
//                 console.log(value);

//                 if(loading){
//                     return <Loading />
//                 }
//                 return (
//                 <>
//                     Slam from Rooms Container
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomsList rooms={sortedRooms}/>
//                 </>)
//             }
//         }
//     </RoomConsumer>
//     </>
//   )
// }

// export default RoomsContainer;
