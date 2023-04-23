import React, { Component } from 'react'
import Title from './Title'

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium! A hic iure debitis eius obcaecati.'
      },

      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium! A hic iure debitis eius obcaecati.'
      },

      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium! A hic iure debitis eius obcaecati.'
      },

      {
        icon: <FaBeer />,
        title: 'Strongest  Beer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium! A hic iure debitis eius obcaecati.'
      }
    ]
  }

  render () {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })} 
        </div>
      </section>
    )
  }
}
