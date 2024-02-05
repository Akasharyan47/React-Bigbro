import './App.css';
import Header from './Component/Header';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './Component/GlobalStyle';
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import PostProperty from './PostProperty';
import ResponseLocation from './Component/ResponseLocation';
import Login from "./Component/Login"
import Home from './Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const App = () => {
  const theme = { 
    fontSize:{
      headerfontSizeH:"1.8rem",
      headerfontSizeM:"1.3rem",
      headerfontSizeL:"1.1rem",
      headingfontSize:"2.3rem" 
    },
    colors:{ 
      heading: "rgb(24 24 29)",
      headerTextColor: "#262626d0",
      headerTextColorblack:"#202124", 
      backgrountColorGray:"#f0f0f0e0", 

   
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />
       <BrowserRouter>
        <Header />
        <Routes> 
         <Route path="/" element={<Home />} />
         
           <Route path="/Login" element={<Login />} />
           <Route path="/PostProperty" element={<PostProperty />} />
           <Route path="/ResponseLocation" element={<ResponseLocation />} />
        </Routes>   

      </BrowserRouter> 
    </ThemeProvider> 
  )
}

export default App;
