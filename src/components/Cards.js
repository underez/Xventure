import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
    <h1>Check out these EPIC Destinations!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <Carditem
            src='./images/img-1.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
          />
          <Carditem
            src='./images/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
          />
           <Carditem
            src='./images/img-3.jpg'
            text='Must-Visit Cities and Sight-Seeing'
            label='City'
            path='/services'
          />
           <Carditem
            src='./images/img-4.jpg'
            text='Exciting World Class Sports Events'
            label='Sport'
            path='/services'
          />
           <Carditem
            src='./images/Gallery5.jpg'
            text='Visit Exotic Places with the Locals'
            label='Adventure'
            path='/services'
          />
          
        </ul>
        
      </div>
    </div>
  </div>
  )
}

export default Cards
