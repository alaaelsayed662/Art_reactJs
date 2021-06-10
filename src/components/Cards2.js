import React from 'react';
import './Cards2.css';
import CardItem2 from './CardItem2';

function Cards2() {
  return (
    <div className='cards2'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards2__container'>
        <div className='cards2__wrapper'>
          <ul className='cards2__items'>
            <CardItem2
              src='images/img-1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem2
              src='images/img-3.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem2
              src='images/img-4.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem2
              src='images/img-5.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem2
              src='images/img-6.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem2
              src='images/img-7.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
