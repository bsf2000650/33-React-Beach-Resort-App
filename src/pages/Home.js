import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
  return (
    <>
      <Hero hero='defaultHero'>
        <Banner title='luxurious rooms' subtitle='delus rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      
    </>
  )
}

Hero.defaultProps  = {
  hero: 'defaultHero'
}

export default Home;
