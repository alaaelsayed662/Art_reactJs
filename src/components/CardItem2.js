/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className='cards2__item'>
        <Link className='cards2__item__link' to={props.path}>
          <figure className='cards2__item__pic-wrap' data-category={props.label}>
            <img
              className='cards2__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards2__item__info'>
            <h5 className='cards2__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem2;
