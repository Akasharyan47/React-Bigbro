import Card from 'react-bootstrap/Card'; 
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';  
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'; 
import Slider from "react-slick";   
const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]
 
const HotelCard = () => {
  const settings = { 
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
 
  return (
    <Main>
      {/* <Row xs={1}  className="g-4 w-75" >
        {Array.from({ length: 5 }).map((_, idx) => (  */}

      <Card className='Cardd'>
        <Row>
          <Col xs={3}>
            <div className='imgCard W-100 d-flex justify-content-end'> 
              <div className='imgCard1  '> 
            
                 <Slider {...settings} className="sldr ">
             
                  {
                    images.map((each, index) => <img className='img-fluid g' alt="" key={index}   src={each} />)
                  }
                </Slider>  
             
              </div>
            </div>
          </Col>

          <Col xs={7}>
            <Card.Header>
              <Card.Title style={{ color: "${({ theme }) => theme.colors.headerTextColorgray}" }} > <h2 style={{ fontWeight:"bold"}}>  3 BHK FLAT IN NEAR GRAPIC ERA UNIVERSITY </h2>
                <spna className="ms-3"> CLEMENT TOEN DERADUN (248002) .</spna>

              </Card.Title>
            </Card.Header>

            <Card.Body className='m-0 p-0 CardBody' >
              <div className='flatInfo m-0 p-0'> 
                <div className="grid-container">
                  <div className='centerline'></div>
                  <div className="grid-item item1" style={{ borderRight: "1px solid #e2e2e2", }}>

                    <div className='logoID d-flex align-items-center justify-content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='opacity-50' width="30" height="30" fill="#E8E2E2" viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
                    </div>
                    <div className='logoIDN'>
                      <h4> SEMIFURNISHED</h4>
                      <span> FURNISING</span>
                    </div>
                   </div>

                  <div className="grid-item item2 " style={{ borderRight: "1px solid   #e2e2e2" }}>
                    <div className='logoID d-flex align-items-center justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='opacity-50' width="30" height="30" fill="#E8E2E2"  viewBox="0 0 948 812"><path xmlns="http://www.w3.org/2000/svg" d="M10,840.773c-5.523,0-10,4.477-10,10v26.169c0,5.523,4.477,10,10,10h882c5.523,0,10-4.477,10-10v-26.169    c0-5.523-4.477-10-10-10h-50V486.857c0-5.523,4.477-10,10-10h24c5.523,0,10-4.477,10-10v-32.959c0-4.061-2.455-7.718-6.213-9.255    l-192.011-78.57c-3.759-1.538-6.214-5.195-6.214-9.255V165.563c0-5.523,4.478-10,10-10h5.946c5.523,0,10-4.477,10-10v-23.48    c0-4.109-2.514-7.8-6.337-9.305L454.663,15.752c-2.354-0.926-4.971-0.926-7.325,0l-246.509,97.026    c-3.824,1.505-6.337,5.196-6.337,9.305v23.48c0,5.523,4.477,10,10,10h5.945c5.523,0,10,4.477,10,10v171.255    c0,4.06-2.455,7.717-6.213,9.255l-192.011,78.57c-3.758,1.538-6.213,5.195-6.213,9.255v32.959c0,5.523,4.477,10,10,10h24    c5.523,0,10,4.477,10,10v353.916H10z M259.667,757.857c0,5.523-4.477,10-10,10h-82.333c-5.523,0-10-4.477-10-10v-86    c0-5.523,4.477-10,10-10h82.333c5.523,0,10,4.477,10,10V757.857z M582,840.773H320v-119.41c0-5.522,4.477-10,10-10h242    c5.523,0,10,4.478,10,10V840.773z M744.667,757.857c0,5.523-4.477,10-10,10h-82.333c-5.523,0-10-4.477-10-10v-86    c0-5.523,4.477-10,10-10h82.333c5.523,0,10,4.477,10,10V757.857z M781.5,511.857c5.523,0,10,4.477,10,10v86    c0,5.523-4.477,10-10,10h-176c-5.523,0-10-4.477-10-10v-86c0-5.523,4.477-10,10-10H781.5z M506.497,196.046    c0-5.523,4.477-10,10-10h81.995c5.522,0,10,4.477,10,10v36.997c0,5.523-4.478,10-10,10h-81.995c-5.523,0-10-4.477-10-10V196.046z     M539,511.857c5.523,0,10,4.477,10,10v86c0,5.523-4.477,10-10,10H363c-5.523,0-10-4.477-10-10v-86c0-5.523,4.477-10,10-10H539z     M293.508,196.046c0-5.523,4.478-10,10-10h81.995c5.523,0,10,4.477,10,10v36.997c0,5.523-4.477,10-10,10h-81.995    c-5.522,0-10-4.477-10-10V196.046z M110.5,521.857c0-5.523,4.477-10,10-10h176c5.523,0,10,4.477,10,10v86c0,5.523-4.477,10-10,10    h-176c-5.523,0-10-4.477-10-10V521.857z"/></svg>
                  
                    </div>

                    <div className='logoIDN'>
                      <h4>3 BHK </h4>
                      <span> APPERTMENT TYPE </span>
                    </div>
                  </div>
                  <div className="grid-item item3">
                    <div className='logoID d-flex align-items-center justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='opacity-50' width="30" height="30" fill="#E8E2E2"  viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                    </div>
                    <div className='logoIDN'>
                      <h4> BACHOLLER/ FAMILY</h4>
                      <span>  TENANT PREFERRED </span>
                    </div>
                  </div>
                  <div className="grid-item item4 " style={{ borderRight: "1px solid   #e2e2e2" }}>
                    <div className='logoID d-flex align-items-center justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='opacity-50' width="30" height="30" fill="#E8E2E2" viewBox="0 0 22 20"> <path d="M18.265 11.322c-.14-.833-.6-3.383-1.096-4.348-.332-.642-1.18-1.134-2.524-1.46-1.09-.264-2.486-.41-3.927-.41-1.443 0-2.838.145-3.93.41-1.342.327-2.19.818-2.522 1.46-.496.964-.955 3.515-1.096 4.348-.758.505-1.13 1.234-1.13 2.204v2.632c0 .686.453 1.27 1.084 1.488v1.143c0 .58.487 1.052 1.085 1.052h1.085c.598 0 1.085-.473 1.085-1.053v-1.053h8.677v1.052c0 .58.487 1.052 1.085 1.052h1.084c.598 0 1.085-.473 1.085-1.053v-1.144a1.585 1.585 0 0 0 1.086-1.488v-2.632c0-.97-.373-1.7-1.13-2.204zm-7.542-5.39c3.247 0 5.352.706 5.686 1.373.322.645.68 2.352.903 3.572a5.8 5.8 0 0 0-.34-.09c-.3-.07-1.075-.148-1.42-.195l-2.86-2.165c-.252-.18-.547-.117-.728.135-.182.25-.135.45.117.63l1.763 1.26c-.957-.03-2.006-.03-3.123-.03-.132 0-.595.013-.726.013L7.03 8.427c-.26-.172-.51-.124-.68.135-.173.258-.137.47.122.643l1.85 1.23c-1.51.027-2.822.108-3.85.352a8.33 8.33 0 0 0-.34.09c.223-1.22.58-2.927.905-3.572.334-.666 2.44-1.374 5.686-1.374zM5.536 19.098H3.974v-1.363h1.562V19.1zm10.373 0v-1.363h1.56V19.1h-1.56zm2.64-2.755c0 .316-.25.572-.558.572H3.452a.566.566 0 0 1-.558-.572V13.48c0-1.058.543-1.623 1.876-1.948 1.404-.342 3.512-.342 5.953-.342 2.44 0 4.547 0 5.952.342 1.333.325 1.876.89 1.876 1.948v2.864zM5.84 15.295c.707 0 1.282-.557 1.282-1.243s-.575-1.244-1.282-1.244c-.707 0-1.282.558-1.282 1.244 0 .686.575 1.244 1.282 1.244zm0-1.658c.236 0 .427.186.427.415a.42.42 0 0 1-.427.415.42.42 0 0 1-.427-.415c0-.23.19-.415.428-.415zm9.76 1.66c.708 0 1.283-.56 1.283-1.245s-.574-1.244-1.28-1.244c-.707 0-1.282.558-1.282 1.244 0 .686.575 1.244 1.28 1.244zm0-1.66c.237 0 .43.186.43.415a.42.42 0 0 1-.43.415.42.42 0 0 1-.426-.415c0-.23.19-.415.427-.415zM21.51 2.882c.364.093.57.416.46.72l-.024.064c-.11.303-.5.475-.864.382L11.015 1.275.918 4.048c-.364.093-.753-.08-.864-.382L.03 3.6c-.11-.303.096-.626.46-.72L11.014 0 21.51 2.882z"></path> </svg>
                    </div>
                    <div className='logoIDN'>
                      <h4>AVAILABLE</h4>
                      <span> PARKING</span>
                    </div>
                  </div>
                  <div className="grid-item item5" style={{ borderRight: "1px solid #e2e2e2" }} >
                    <div className='logoID d-flex align-items-center justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='opacity-50' width="30" height="30" fill="#E8E2E2"  viewBox="0 0 448 512"><path xmlns="http://www.w3.org/2000/svg" d="M512,21.333H213.333V0H0v213.333h21.333V512H192V213.333h21.333V192H512V21.333z M42.667,42.667h128v128h-128V42.667z     M149.333,469.333H64v-64h21.333c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H64V320h21.333    c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H64v-64h85.333V469.333z M469.333,149.333h-256V64h64    v21.333c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333V64h42.667v21.333    c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333V64h64V149.333z"/></svg>
                    </div>
                    <div className='logoIDN'>
                      <h4> 89 SQ FT.</h4>
                      <span>BUILT UP AREA</span>
                    </div>
                  </div>
                  <div className="grid-item item6">
                    <div className='logoID d-flex align-items-center justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='opacity-50' width="30" height="30" fill="#E8E2E2" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                    </div>
                    <div className='logoIDN'>
                      <h4> IMEDIATELY</h4>
                      <span>AVAILABILIY</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Col>
          <Col xs={2} className=" LikePrice p-0 m-0 ">
            <Card.Header style={{ border: "none", background: "transparent" }} >
              <ListGroup variant="flush" className="list-group-flush d-flex flex-row-reverse gap-4 ">

                <svg className='me-4' width="25" height="25" fill="red" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" /></svg>
                <svg width="25" height="25" fill="red" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>


              </ListGroup>
            </Card.Header>

            <Card.Body className="p-0">
              <div className='priceBox'>
                <div className='price'>
                  <h1> ₹ 20000</h1>
                  <h4>RENT</h4>

                </div>
                <div className='price'>
                  <button type="button" className="btn btn-primary btn-sm ">CONTACT US.</button>
                </div>

              </div>
            </Card.Body>
          </Col>

        </Row> 
      </Card> 
      {/* ))}
    </Row>  */}
    </Main> 
  )
}

const Main = styled.section`   
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 .Cardd{  
  margin:30px;
   border:2px solid gray; 
  ${'' /* max-width:75vw; */}
  overflow:hidden;
  padding:15px 0;
 }
.imgCard{  
   margin:5px;
   height:min-content; 
   overflow:hidden;
   display:flex;
   
 .imgCard1{ 
   margin:0;
   top:0;
   bottom:0;
   min-width:200px;
   max-width:300px;
   height:auto;  
   position:relative; 

  .g{
    border:2px solid #F5F5F5;
    overflow:hidden;
    padding:0 18px;
    height:218px; 
  }
   
  .slick-next, .slick-prev { 
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%; 
    width: 65px;
    height: 50px; 
    padding: 0;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    border: none; 
} 
.slick-next:before, .slick-prev:before {
    color: #000;
}
 }
}
.grid-container {
   display: grid;
   border:1px solid gray;
   background-color: #ee2e24;  
   grid-template-rows:repeat(2, 1fr);
   grid-template-columns:repeat(3, 1fr);
   position:relative;
  ${'' /* color: ${({ theme }) => theme.colors.headerTextColor}; */}

  .centerline{ 
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:95%;
    background:white;
    border:none;
    border-radius:20px;
    height:1px;
  }
 
 .grid-item {  
  margin:7px;
  display:inline-flex;
  position:relative; 
  justify-content:center; 
  align-items:center;
  text-align:center;
  color: white;  
  .logoID{  
    width:30%;
    height:70px;  
  }
 
  .logoIDN{   
    width:70%;
    height:auto; 
    display:block;
    position:relative;
    letter-spacing:0.5px; 
      
     span{   
      justify-content:center;
      color:white;
      display:flex;
      letter-spacing:0.5px; 
      
     }
   } 
  } 
 .item1 {
  grid-column: 1 ;
  grid-row: 1;
  
} 
.item2 {
  grid-column: 2;
  grid-row: 1;
}
.item3 {
  grid-column: 3;
  grid-row: 1 ;
}
.item4 {
  grid-column: 1;
  grid-row: 2;
} 
.item5 {
  grid-column:2;
  grid-row:2;
} 
.item6 {
  grid-column:3;
  grid-row: 2;
}  
} 
 
.priceBox{ 
  width:auto;
  height:auto;
  background:#F5F5F5;
  margin-top:17px;
  display:block; 
  justify-content:center;
  align-items:center;
  align-self:center;
  overflow:hidden;  

  .price{
    justify-content:center;
     align-items:center; 
     
    margin:1px; 
    height:85px;
    width:max-context;  
    display: flex;   
     flex-direction:column; 
    color: ${({ theme }) => theme.colors.headerTextColorblack}; 
    h1{
      font-weight:600;
      letter-spacing:0.5px; 
    }
    
  }
  .btn{
    background:#2EFF2E;
    border:none;
    border-radius:14px;
     padding: 5px 17px ;
    font-weight:bold;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
  } 
}  
`; 
export default HotelCard; 