import React from 'react';
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan} from 'react-icons/fa';


const Services = () => {

  const services = [
    {
      icon : <FaCocktail />,
      title : 'Free Coctails',
      info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, sed?'
    },
    {
      icon : <FaHiking />,
      title : 'Hiking',
      info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, sed?'
    },
    {
      icon : <FaShuttleVan />,
      title : 'Shuttle Van Service',
      info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, sed?'
    },
    {
      icon : <FaShuttleVan />,
      title : 'Shuttle Van Services',
      info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, sed?'
    },
  ]

  return (
    <>
        <section className='services'>
        <Title title='Services' />
        <div className="services-center">
          {
            services.map((item,index) => {
              return (
                <article key={index} className='service'>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              )
            })
          }
        </div>
        </section>
    </>
  )
}

export default Services
