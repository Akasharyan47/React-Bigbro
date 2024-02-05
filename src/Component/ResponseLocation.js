import React from 'react';
import { Card } from '@material-ui/core';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './ProductCard';
// const data = [
//   {
//     id: 1,
//     title: "example title",
//     content: "example content",
//     image: "https://i.imgur.com/example.jpg"
//   },

//   {
//     id: 2,
//     title: "example title",
//     content: "example content",
//     image: "https://i.imgur.com/example.jpg"
//   },
//   {
//     id: 3,
//     title: "example title",
//     content: "example content",
//     image: "https://i.imgur.com/example.jpg"
//   },
//   ]
const ResponseLocation = () => { 
   
  return (
     <>
        <div className='row-wrapper'>
        {/* <Row>
           {data.map(product => (
            <Product key={product.id} {...product} />
          ))}  
        </Row> */}
      </div>
       
     </>

  )
}

export default ResponseLocation