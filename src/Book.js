import React from 'react';

export default function Book(props) {

  let price = props.price;
  if (price !== 'Price Not Available') {
    price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
           .format(props.price)
  }
  
    return (
      <div className="Book">
        <img src={props.image} alt='book'/>
        <h2>{props.title}</h2>
        <p>Author: {props.author}</p>
        <p>Price: {price}</p>
        <p>{props.summary}</p>
        <a href={props.link}>More Info</a>

      </div>
    );
}
