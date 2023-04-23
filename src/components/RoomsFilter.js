import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter ({ rooms }) {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context

  let types = getUnique(rooms, 'type')

  types = ['all', ...types]

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    )
  })
  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* type */}
        <div className='form-group'>
          <label htmlFor='type'>Room Type</label>
          <select
            name='type'
            id='type'
            value={type}
            onChange={handleChange}
            className='form-control'
          >
            {types}
          </select>
        </div>

        {/* Guest */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            onChange={handleChange}
            className='form-control'
          >
            {people}
          </select>
        </div>

        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>Room Price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>

        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>Room Size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />

            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>

        {/* extra */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>Breakfast</label>
          </div>

          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}
