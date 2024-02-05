import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import BannerCard from './Component/CardFile';
import FooterCard from './Component/FooterCard.js';
import Footer from './Component/Footer';
import BANNER from "./image/banner1.jpg";
import WorldMap from './Component/WorldMap';
import AddPoster from './Component/BannerFile';
import ResponseLocation from './Component/ResponseLocation.js';
import Counting_room_data from './Component/Counting_room_data';

const Home = () => {
      const [place, setPlace] = useState(""); 
       const serchItems = (h) => {  
        ResponseLocation(h);
        console.log(h); 
    }

    return (
        <Main>
            <Fragment>
                <div className='container-fluid  nn' alt="Responsive image" style={{ backgroundImage: `url(${BANNER})` }}>
                    <div className='container nn1 '>
                        <h className='nna pt-5'> Find your next home___ </h>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" onClick={() => serchItems("Flat")} value="Flat" className="btn btn-secondary btnborder">Flat</button>
                            <button type="button" className="btn btn-secondary btnborder">PG</button>
                            <button type="button" className="btn btn-secondary btnborder">Hostel</button>
                            <button type="button" className="btn btn-secondary btnborder">House / villa</button>
                            <button type="button" className="btn btn-secondary btnborder">Commercial</button>
                        </div>

                        <div className='SelectLocation'>
                            <div className='row d-flex justify-content-between'>
                                <div className='col-2   '>
                                    Location
                                </div>
                                <div className='col-4 '>
                                    <input onChange={(e) => setPlace(e.target.value)} value={place} placeholder='serch by flat, pg, room'></input>

                                </div>
                                <div className="col-2   ">
                                    <button type="button" className="btn btn-success " style={{ padding: "2px 20px 5px 20px", fontSize: "13px" }} >Search</button>
                                </div>
                            </div>
                            {/* <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>   */}
                        </div>

                    </div>
                </div>
            </Fragment>

            <Fragment>
                <BannerCard />
            </Fragment>

            <Fragment>
                <AddPoster />
                <WorldMap />
                <Counting_room_data />
                <FooterCard />
                <Footer />
            </Fragment>
        </Main>
    )
}

const Main = styled.section` 
.nn{ 
    min-height:300px;
    height: calc(100vh - 180px); 
    .nn1{  
        height:100%;  
        align-items: center;
        display: flex; 
        flex-direction: column; 
        z-index: 1; 
        .nna  { 
             color:white;
            font-weight:600;
            font-size: 27px;
        }
    }
  }     
.btn-group{
    height:35%;
    width:100%;
   display:flex; 
 align-items:center;
 justify-content:center;  
 gap:8px;
  button{ 
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    max-width:100px;
    background:white;
    padding:6px;
    border:none;
    color:black;
    font-weight:600;  
    color: rgba(0,0,0,.75); 
}}
  .SelectLocation{
    text-align:center;
    font-weight:600;  
   width:50%;
     min-width:400px;
    background:white; 
    border-radius:5px;
    .col-4  {
        text-align:center;
        align-items:center;
     justify-content:center;
    display:flex; 
    font-style: oblique;
    letter-spacing:1px;
        color: rgba(0,0,0,.35);
    h{ 
        justify-content:center;
        display:flex; 
    }
    input{
        border:none;
        text-decoration:none;
        height:100%;
        transformation:none;
    }
    } 
    .col-2{
        text-align:center;
        align-items:center;
        justify-content:center;
        display:flex; 
        font-size: ${({ theme }) => theme.fontSize.headerfontSizeM}; 
        margin:8px;
         width:110px;
        border-right:2px solid rgba(0,0,0,.55);
        b
        ${'' /* padding: 0 10px 0 10px; */}
        button{
            font-size:16px;
            padding:3px 10px 3px 10px; 
        } 
    } 
}
 
`;
export default Home