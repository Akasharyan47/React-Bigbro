import React from 'react';
import styled from 'styled-components';
import selectbooks from "../image/selectbooks1.jpg";
import visitting from "../image/visitting1.jpg";
import visitingwelcome from "../image/visitingwelcome1.jpg";


const FooterCard = () => {
  return (
    <Main>
        <div>
          <div className="container"  >
            <div className="row ">
              <div className="col-md-4 card "> 
                <div className="CardImg">
                  <img src={selectbooks} className="img-fluid" alt=""></img>
                </div>
                <div className="CardDtl ">
                  <h3><b>Select & Book</b></h3>
                  <p>you can easily select one of the properties & book <br/>by just a tap. </p>
                </div>
              </div>

              <div className="col-md-4 card cardRignt"> 
                <div className="CardImg" id="right">
                  <img src={visitting} className="img-fluid" alt=""></img>
                </div>
                <div className="CardDtl" id="left">
                  <h3><b>BigBro flix a meeting(visitng)</b></h3>
                  <p>we really do care of your satisfaction and fix your<br/>meeting with the owner four convenience. </p>
                </div>
              </div>

              <div className="col-md-4 card "> 
                <div className="CardImg   ">
                  <img src={visitingwelcome} className="img-fluid" alt=""></img>
                </div>
                <div className="CardDtl ">
                  <h3><b>BigBro welcomes your thank</b></h3>
                  <p>BigBro glad to see you happy and satisfied.</p>
                </div>
              </div> 
            </div>
          </div>
        </div> 
      </Main> 
  )
}


const Main = styled.section`

 .card{ 
    width:max-context;        
    height:max-context; 
    display: flex;  
   flex-direction:column; 
   border:none;   
   padding-top: 70px; 
  .CardImg{  
   border-radius:2px;
    display:flex; 
    height:300px;
     max-width:320px;  
    margin:0;
    top:0;
    bottom:0;
    align-items:center;
    left:0;   
    overflow:hidden;
   } 
  .CardDtl{   
    padding:30px;
    width:99%;   
    text-align:center; 
   }
   h3{ 
    color:#464646;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
   }
    p{
      font-weight:500;
      padding:5px;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      color:${({ theme }) => theme.colors.headerTextColor};  
    } 
  }
 
  @media only screen and (max-width: 767px) {
    .card{  
      padding-top: 30px;
    justify-content:start; 
    flex-direction:row; 
    .CardImg{  
      padding:0;
      height:100px;
      width:100px; 
      background:red;
      height:min-context; 
  }
  .CardDtl{
    
    display:inline; 
    width:50%;   
  }  
  .cardRignt{
    justify-content:end; 
  }
    #right{
      -webkit-order:2;
      order:2; 

    }
    #left{
      -webkit-order:1;
      order:1;
    } 
  
  }
 } 
`; 
export default FooterCard;