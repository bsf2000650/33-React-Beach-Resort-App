import React, {useContext, useState} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';


const SingleRoom = () => {
  
  const context = useContext(RoomContext);

  const {slug} = useParams();

  // const [state,setState] = useState({slug : useParams(),
  // defaultBcg})
  console.log(slug);


  const {getRoom} = context;

  const room = getRoom(slug);

  if(!room){
    return(
     <div className="error">
      <h3>No such room could be found...</h3>
      <Link to='/rooms' className='btn-primary'>
        Back to Rooms
      </Link>
    </div>)
  }

  const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;

  const [mainImg,...defaultImg] = images;

  console.log(defaultImg);

    return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item,index)=>{
              return(
                <img key={index} src={item} alt={name} />
              )
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : ${size}SQFT</h6>
              <h6>Max Capacity : {
                  capacity > 1 ? `${capacity} people` : `${capacity} person`
              }</h6>
              <h6>{pets ? 'pets allow' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item,index)=>{
            return <li key={index}>- {item}</li>
          })}
        </ul>
      </section>
    </>
  )
}

export default SingleRoom;
