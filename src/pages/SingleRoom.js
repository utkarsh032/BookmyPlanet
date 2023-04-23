import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }
  static contextType = RoomContext
  // componentDidMount () {}

  render () {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)
    if (!room) {
      return (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/' className='btn-primary'>
            Back To Rooms
          </Link>
        </div>
      )
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room

    const [mainImg, ...defaultImg] = images

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back To Room
            </Link>
          </Banner>
        </StyledHero>

        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>Details</h3>
              <p>{description}</p>
            </article>

            <article className='info'>
              <h3>Info</h3>
              <h6>Price: ₹{price}</h6>
              <h6>Size: ₹{size}sqft</h6>
              <h6>
                max capacity : {''}
                {capacity > 1 ? `${capacity} people ` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'} </h6>

              <section className='room-extras'>
                <h3>Extras</h3>
                <ul className='extras'>
                  {extras.map((item, index) => {
                    return <li key={index}>- {item}</li>
                  })}
                </ul>
              </section>
            </article>
          </div>
        </section>
      </>
    )
  }
}
