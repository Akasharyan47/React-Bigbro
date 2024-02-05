import styled from "styled-components";
import React, { useState } from "react";
import Slider from "react-slick"; 
import Pg from "../image/pg1.jpg";
import Hostel from "../image/hostel1.jpg"
import Flat from "../image/flat1.jpg";
import House from "../image/house1.jpg"; 
 

const BannerCard = () => { 
  var settings = {
    dots: true,
    infinite: false,
    speed: 7000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (

    <Main>
      <div className='container-fluid imgdiv ' >
       <Slider {...settings}>
       <div className="card"><img className="img-fluid" src={Flat} alt="" /></div>  
          <div className="card"><img className="img-fluid" src={Hostel} alt="" /></div>
          <div className="card"><img className="img-fluid" src={Pg} alt="" /></div>
          <div className="card"><img className="img-fluid" src={House} alt="" /></div>
          <div className="card"><img className="img-fluid" src={Flat} alt="" /></div>
          <div className="card"><img className="img-fluid" src={House} alt="" /></div>
          <div className="card"><img className="img-fluid" src={Flat} alt="" /></div>    
      
        </Slider>  
      </div> 
    </Main> 
  )
};
const Main = styled.section` 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    .imgdiv{ 
      padding:20px; 
      heignt:min-context;
      justify-content:center;
      align-items:center; 
    }
    .card {  
      border:none;
      padding:10px;
      display:flex;
       width:200px; 
      position: relative; 
 }
.cards img {   
  object-fit: cover;
    width: 100%;
    height: 100%;
     object-fit: cover;
}
 `; 

export default BannerCard;