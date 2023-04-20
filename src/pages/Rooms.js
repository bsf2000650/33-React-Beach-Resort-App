import React, { useContext } from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';
import { RoomContext } from '../Context';


const Rooms = () => {

  const context = useContext(RoomContext);

  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer context={context}/>
    </>
  )
}

export default Rooms;
