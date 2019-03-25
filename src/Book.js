import React from 'react';

export default function Book(props) {

  let price = props.price;
  if (price !== 'Price Not Available') {
    price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
           .format(props.price)
  }
  
  const eBook = props.eBook ? 'eBook Available' : 'eBook Not Available';
  
    return (
      <div className="Book">
        <img src={props.image} alt='book'/>
        <h2>{props.title}</h2>
        <p>Author: {props.author}</p>
        <p>Price: {price}</p>
        <p>{props.summary}</p>
        <p>{eBook}</p>
        <a href={props.link}>More Info</a>
        

      </div>
    );
}
