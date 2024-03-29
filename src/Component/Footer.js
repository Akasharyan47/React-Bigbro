import React from 'react'
import styled from 'styled-components';
import Lwhite from "../image/bigbroo.png";
import FooterBackgroung from "../image/FooterBackgroung2.png";
const Footer = () => {
    return (
        <Main>
            <div className='container-fluid' style={{
                backgroundImage: 'url(' + FooterBackgroung + ')',
                backgroundSize: "cover",
                height: "400px",
                width: "100%",
                bottom: "0px", 
                backgroundPosition: "bottom" 
                }}> 
                <div className=" footerClr pt-5 "> 
                    <div className='footer_heading  '>
                        <h1 className='conatiner '> Bigbro always stand by you</h1>
                    </div>

                    <div className='main_middle d-flex justify-content-around'>
                        <div className=' middle1 '>
                            <div className='logo'>
                                <img className="img-fluid" src={Lwhite} alt=""></img>
                            </div>

                        </div>

                        <div className='middle2  '>
                            <ul className="list-group listt  ">
                                <li></li>
                                <li className="list-group-item">About Us</li>
                                <li className="list-group-item">Team / Careers</li>
                                <li className="list-group-item"> Blogs </li>
                                <li className="list-group-item">Support</li>
                                <li></li>
                            </ul> 
                        </div>

                        <div className='middle3'>
                            <ul className="list-group listt">
                                <li></li>
                                <li className="list-group-item">Terms & Conditons</li>
                                <li className="list-group-item">Privacy Policy</li>
                                <li className="list-group-item">Trust and safety</li>
                                <li className="list-group-item">Helps and centre</li>
                                <li></li>
                            </ul>

                        </div>
                        <div className='middle4'>  
                        </div>
                    </div>
                    <div className='footer_icon'>
                        <div className='iconsgroup'>
                            <a className="text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white'  width="24"  height="24" className="w-5 h-5" viewBox="0 0 512 512">  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </a>   
                            <a className="color-success text-gyay-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white'   width="24" height="24"  viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                            </a>
                            <a className="text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white'  width="24" height="24" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                            <a className="text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white'  width="24" height="24" viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            </a>
                            <a className="text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white'  width="24" height="24" viewBox="0 0 576 512"> <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                            </a>
                        </div> 
                        <span className='d-flex align-self-center'> www.bigbro.in</span> 
                    </div>

                    <div className=' tag  d-flex justify-content-between '>

                        <span className='pt-2' style={{fontSize: "1.2rem",color:"#fff"}}>
                            Copyright © 2023 bigbro.in
                        </span>
                        <span className=' pt-2'  style={{ fontSize: "1.2rem", color:"#fff" }}> Powered by bigbro.in</span>
                    </div>
                </div>
            </div>
        </Main>
    )
};
const Main = styled.section` 
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
   text-decoration:none;   
   
    .footerClr{
    display:block;  
    }  

   .footer_heading{    
     border-bottom: 0.1rem solid hsla(0,0%,100%,.5);
    h1{   
        margin-left:20px;
        padding:0px 0 10px;
        color:white; 
        font-weight:600; 
    } 
   }
   .main_middle{ 
    height:auto; 
    display:flex;
    flex-direction:row;  
     padding-top:20px;
     padding-bottom:30px; 

    .middle1{  
         max-width:200px;  
         align-items:center; 
         display:flex;
         place-items:center; 
        .logo{  
            width:130px; 
        }
    }

    .middle2{  
          
        border-left:0.1rem solid hsla(0,0%,100%,.5); 
         width:220px;   
     } 

    .middle3{ 
        width:220px; 
        border-left: 0.1rem solid hsla(0,0%,100%,.5);
    }
     
    .listt{
            padding: 10px;
            border: none; 
            display: block;    
            list-style-type: none;

          li{

            font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
            letter-spacing:0.5px;
            background-color: transparent;
            background-image: none;
            font-weight:500;
            color: #fff;  
            border:none;
            cursor:pointer;
             
        .list-group-item{
         border:none;
         border-radius:none;
        }
    }  }  
 } 
 
.footer_icon{
    border-bottom:0.1rem solid hsla(0,0%,100%,.5);
    height:40px; 
    display:flex; 
    flex-direction:row;
    align-items:center;
    position:relative;
    margin-left:2%;
    margin-right:2%;

    span{ 
        font-size: ${({ theme }) => theme.fontSize.headerfontSizeL}; 
         letter-spacing:0.5px;
        position:absolute;
        display:grid; 
        font-weight:500; 
        color: #fff;  
        justify-content:center;
         width:100%;
        cursor:pointer; 
    } 
}

.iconsgroup{ 
    gap:10px;
   display:flex; 
   align-items:end;  
   width:min-content;  
}     
.tag{
 margin-left:2%;
 margin-right:2%;
}


`;
export default Footer