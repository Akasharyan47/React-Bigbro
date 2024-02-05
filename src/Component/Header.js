import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Logo from "../image/bigbroo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <MainHeader>
      <div className="HeaderLogo ">
        <div className="logo">
          <img className="img-fluid" src={Logo} alt="logo" />
        </div>
      </div>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
  padding: 0 2rem; 
  box-shadow:1px 1px 4px rgba(0, 0, 0, 0.664);
  display: flex;
  justify-content: space-between;
  align-items: center;  
  background:red;
  .HeaderLogo{    
    min-width:200px;
   overflow: hidden; 
   display: flex;  
   justify-content: space-between;
   align-items: center;  
   }  
  .logo {  
    width:110px;
    height:60px;
    display:flex;
    align-items:center;  
  }    

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .logo { 
    width: 60px;
    height: 60px;
  }  
  .HeaderLogo{    
    min-width:auto;
  }
}
`;
export default Header;

