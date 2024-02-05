import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"; 
import { CgMenu, CgCloseR } from "react-icons/cg"; 

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
        .navbar-list {
           display: flex;
            gap: 3.5rem; 
            
            li {
              list-style: none; 
              .navbar-link {
                &:link,
                &:visited {  
                   ${'' /* color: #262626d0;  */}
              
                  font-weight: 600;
                  display: inline-block;
                  text-decoration: none;
                  font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
                  text-transform: uppercase; 
                  transition: color 0.3s linear; 
                 .postproperty{   
                    background:white; 
                    color:${({ theme }) => theme.colors.headerTextColorblack};  
                    padding:  4px 6px 4px 13px;
                    border-radius:7px;
                  } 
                  
                  ${'' /* &:after{
                 content:'';
                  width:0%; 
                 height:1px;    
                 background:#FFC000;
                 display: block;
                 margin: auto;
                 transition: 0.6s all; 

                  }
                  &:hover{  
                    background: linear-gradient(to bottom,  rgba(255, 255, 255, 0) 80%, #FF9933 );
                  }
                &:hover::after{
                    width: 100%; 
                 }  */}
                  
                   } 
              }
            }
          }

          .mobile-navbar-btn {
            display: none; 
            .close-outline {
              display: none;
            }
          }

          .mobile-navbar-btn[name="close-outline"] {
            display: none;
          }
          .cd {
            color:white;
          }

          @media (max-width: ${({ theme }) => theme.media.mobile}) {
            .navbar-link {  
              svg{
                fill: ${({ theme }) => theme.colors. headerTextColor};
              } }
              .cd{
                color: ${({ theme }) => theme.colors. headerTextColor};
               }
              
            .mobile-navbar-btn {
              display: inline-block;
              z-index: 999;
              border: ${({ theme }) => theme.colors.headerTextColor};

              .mobile-nav-icon {
                font-size: 3rem;
                color: ${({ theme }) => theme.colors.headerTextColor};
              }
            }

            /* hide the original nav menu  */
            .navbar-list { 
              font-size:17px;  
              width: 100vw;
              height: 100vh;
              position: fixed;
              top: 0;
              left: 0;
              background-color: #fff; 
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: column;
              text-align: center; 
              transform: translateX(100%); 
              visibility: hidden;
              opacity: 0; 

              li { 
                .navbar-link {
                    &:after{
                 content:'';
                  width:0%;
                  height:2px;
                 background:#FFC000;
                 display: block;
                 margin: auto;
                 transition: 0.1s; 
                  }

                &:hover::after{
                    width: 100%; 
                 } 
                 &:link,
                 &:visited { 
                  font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
                } 
                }
              }
            }

            .active .mobile-nav-icon {
              display: none;
              font-size: 3rem;
              position: fixed;
              top: 3%;
              right: 10%;
              color: ${({ theme }) => theme.colors.black};
              z-index: 9999;
              overflow:hidden;
            }

            .active .close-outline {
              display: inline-block;
            }

            .active .navbar-list {
              visibility: visible;
              opacity: 1;
              transform: translateX(0);
              z-index: 999;
            }
        }
       `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">  
        <li>
            <NavLink
              className="navbar-link mt-2 text-white"
              onClick={() => setOpenMenu(false)}
              to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"> 
            </NavLink>
          </li> 
          <li>
            <NavLink
              className="navbar-link  mt-2"
              onClick={() => setOpenMenu(false)}
              to="/PostProperty">  
              <>
                <div className="postproperty">
                    <span className="pe-2"> POST PROPERTY </span>
                    <span  className="text-success"  style={{ padding:" 0 15px 0px  5px",  background:"tranparent", borderTop:"2px solid gray", borderTopLeftRadius:"0.3em",borderTopRightRadius:"0.3em"}}>Free</span>
                </div>
              </> 
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link cd mt-3 "
              onClick={() => setOpenMenu(false)}
              to="/Login"> 
              LOGIN / SIGN UP
            </NavLink>
          </li>   
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
