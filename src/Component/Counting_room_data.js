import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Counting_room_Background from "../image/Counting_room_Background.jpg"

const Counting_room_data = () => {
  return (
    <Main>
      <Fragment>
        <div
          className=" container-fluid main " 
          style={{
            backgroundImage: `url(${Counting_room_Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", 
            position:"absloute"
            }}>
          <div className="d-flex h-100 justify-content-evenly align-items-center ">
            <div className="box">
              <h2 className="d-flex  justify-content-center mb-4 ">25</h2>
              <div className="d-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="wave_blue"
                  data-name="wave blue"
                  width="84.325"
                  height="18.066"
                  viewBox="0 0 84.325 18.066"
                >
                  <path
                    id="Fill_13"
                    data-name="Fill 13"
                    d="M64.919,0c1.066.6,2.071,1.26,3.148,1.758a17.269,17.269,0,0,0,3.57,1.2,9.835,9.835,0,0,0,3.092.436,5.439,5.439,0,0,0,2.5.212c.343.012.689-.191,1.036-.2.374-.007.707-.192,1.038-.214,1.222-.082,2.327-.647,3.533-.77.089-.009.167-.121.281-.21l1.031.678-.956.707h1.13l-.309.721.238.384a4.791,4.791,0,0,1-.561,1.349,8.14,8.14,0,0,1-1.571,1.362,1.524,1.524,0,0,1-.9.253c-.666-.027-1.262.4-1.943.255-.1-.022-.236.125-.374.2l-.138-.39H74.542a2.646,2.646,0,0,0,1.289.171c.489.011.979,0,1.468,0a2.909,2.909,0,0,1,1.3.225c-.852,0-1.7,0-2.557,0a5.521,5.521,0,0,1-2.976-.449,9.841,9.841,0,0,1-2.889-.652A2.6,2.6,0,0,1,69,6.334l-.2.206a17.021,17.021,0,0,0-2.067-1.084c-.5-.187-.7-.737-1.238-.836a3.037,3.037,0,0,1-.666-.332c-.328-.108-.858.246-1.25-.21l-.191.191L63.091,4.1l-.162.4h-.374l.207-.342c-.063-.029-.147-.1-.186-.081-.282.138-.558.291-.832.446-.245.139-.485.287-.784.466L60.63,4.78l-.2.425-.172-.159c-.232.188-.449.507-.7.54a10.871,10.871,0,0,0-1.837.768,2.664,2.664,0,0,0-.869.618A10.334,10.334,0,0,1,53.9,8.845l-.269-.251-.433.437h-.969l-.413.678h-.4c-.13.164-.22.4-.373.45-.71.244-1.359.745-2.218.274a1.867,1.867,0,0,0-1.412.152l1.358.083-.006.131H47.256l-.171-.485c-.531.509-1.075.312-1.6.082A8.85,8.85,0,0,1,43.367,9.21,11.046,11.046,0,0,0,40.6,7.461a2.468,2.468,0,0,1-.347-.23H38.93c-.043-.066-.08-.1-.074-.118s.052-.053.075-.082c.039-.051.073-.1.14-.2h-.809l-.154-.454L37.644,6.3l.269.384-.238.262.707.14c-1.48.237-2.895.825-4.4.576a1.393,1.393,0,0,1-1.58.933c-.96.884-1.917,1.81-2.923,2.68a8.515,8.515,0,0,1-3.58,1.966c-1.128.261-2.322.687-3.508.106a.76.76,0,0,0-.336-.005,6.508,6.508,0,0,1-3.121-.917c-.413-.2-.734-.582-1.142-.792a8.3,8.3,0,0,0-1.8-.583,15.228,15.228,0,0,0-3.3-.188,8.665,8.665,0,0,0-2.977.442.554.554,0,0,1-.334,0c-.1-.035-.171-.136-.279-.229l-.163.485-.549-.209c-.02.076-.047.177-.092.35-.916.262-1.665,1.141-2.785.963l-.334.334.241.269A10.53,10.53,0,0,0,3.84,14.475,8.633,8.633,0,0,1,2.263,15.98l-.316.672-.565.324c-.063.681-.063.681-.4,1.09L0,17.087V15.112c.049-.034.377-.15.389-.292.048-.581.648-.757.813-1.234A3.745,3.745,0,0,1,2.155,12.4c.464-.517.92-1.043,1.357-1.583A9.746,9.746,0,0,1,8.391,7.908c.439-.1.85-.314,1.284-.439.41-.118.86.153,1.282-.207.174-.148.581-.024.622-.024l.706.362-.347.482h1.381l-.713-.249c.619-.649,1.212-1.141,2.136-.637a.728.728,0,0,0,.321.041,6.594,6.594,0,0,1,3.762,1.3,2.474,2.474,0,0,0,1.7.5,8.621,8.621,0,0,1,1.715.237,7.47,7.47,0,0,0,4.672-1.529,18.172,18.172,0,0,0,2.125-1.679,10.4,10.4,0,0,1,3.951-2.2c1.037-.345,2.145-.47,3.206-.729a25.153,25.153,0,0,1,3.3-.2,2.749,2.749,0,0,1,1.8.571c1.176.729,2.292,1.552,3.46,2.293a4.51,4.51,0,0,0,1.81.526,6.919,6.919,0,0,0,3.283-.514c.85-.3,1.658-.723,2.478-1.1a36.368,36.368,0,0,0,3.917-2.283A11.191,11.191,0,0,1,60.485.674a7.446,7.446,0,0,0,1.4-.442A10.125,10.125,0,0,1,64.919,0"
                    transform="translate(0 0)"
                    fill="#35b8be"
                  />
                </svg>
              </div>
              <h3 className="d-flex  justify-content-center mt-2 ">PGs</h3>
            </div>
            <div className="box ">
              <h2 className="d-flex   justify-content-center mb-4 ">5</h2>
              <div className="d-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="wave_blue"
                  data-name="wave blue"
                  width="84.325"
                  height="18.066"
                  viewBox="0 0 84.325 18.066"
                >
                  <path
                    id="Fill_13"
                    data-name="Fill 13"
                    d="M64.919,0c1.066.6,2.071,1.26,3.148,1.758a17.269,17.269,0,0,0,3.57,1.2,9.835,9.835,0,0,0,3.092.436,5.439,5.439,0,0,0,2.5.212c.343.012.689-.191,1.036-.2.374-.007.707-.192,1.038-.214,1.222-.082,2.327-.647,3.533-.77.089-.009.167-.121.281-.21l1.031.678-.956.707h1.13l-.309.721.238.384a4.791,4.791,0,0,1-.561,1.349,8.14,8.14,0,0,1-1.571,1.362,1.524,1.524,0,0,1-.9.253c-.666-.027-1.262.4-1.943.255-.1-.022-.236.125-.374.2l-.138-.39H74.542a2.646,2.646,0,0,0,1.289.171c.489.011.979,0,1.468,0a2.909,2.909,0,0,1,1.3.225c-.852,0-1.7,0-2.557,0a5.521,5.521,0,0,1-2.976-.449,9.841,9.841,0,0,1-2.889-.652A2.6,2.6,0,0,1,69,6.334l-.2.206a17.021,17.021,0,0,0-2.067-1.084c-.5-.187-.7-.737-1.238-.836a3.037,3.037,0,0,1-.666-.332c-.328-.108-.858.246-1.25-.21l-.191.191L63.091,4.1l-.162.4h-.374l.207-.342c-.063-.029-.147-.1-.186-.081-.282.138-.558.291-.832.446-.245.139-.485.287-.784.466L60.63,4.78l-.2.425-.172-.159c-.232.188-.449.507-.7.54a10.871,10.871,0,0,0-1.837.768,2.664,2.664,0,0,0-.869.618A10.334,10.334,0,0,1,53.9,8.845l-.269-.251-.433.437h-.969l-.413.678h-.4c-.13.164-.22.4-.373.45-.71.244-1.359.745-2.218.274a1.867,1.867,0,0,0-1.412.152l1.358.083-.006.131H47.256l-.171-.485c-.531.509-1.075.312-1.6.082A8.85,8.85,0,0,1,43.367,9.21,11.046,11.046,0,0,0,40.6,7.461a2.468,2.468,0,0,1-.347-.23H38.93c-.043-.066-.08-.1-.074-.118s.052-.053.075-.082c.039-.051.073-.1.14-.2h-.809l-.154-.454L37.644,6.3l.269.384-.238.262.707.14c-1.48.237-2.895.825-4.4.576a1.393,1.393,0,0,1-1.58.933c-.96.884-1.917,1.81-2.923,2.68a8.515,8.515,0,0,1-3.58,1.966c-1.128.261-2.322.687-3.508.106a.76.76,0,0,0-.336-.005,6.508,6.508,0,0,1-3.121-.917c-.413-.2-.734-.582-1.142-.792a8.3,8.3,0,0,0-1.8-.583,15.228,15.228,0,0,0-3.3-.188,8.665,8.665,0,0,0-2.977.442.554.554,0,0,1-.334,0c-.1-.035-.171-.136-.279-.229l-.163.485-.549-.209c-.02.076-.047.177-.092.35-.916.262-1.665,1.141-2.785.963l-.334.334.241.269A10.53,10.53,0,0,0,3.84,14.475,8.633,8.633,0,0,1,2.263,15.98l-.316.672-.565.324c-.063.681-.063.681-.4,1.09L0,17.087V15.112c.049-.034.377-.15.389-.292.048-.581.648-.757.813-1.234A3.745,3.745,0,0,1,2.155,12.4c.464-.517.92-1.043,1.357-1.583A9.746,9.746,0,0,1,8.391,7.908c.439-.1.85-.314,1.284-.439.41-.118.86.153,1.282-.207.174-.148.581-.024.622-.024l.706.362-.347.482h1.381l-.713-.249c.619-.649,1.212-1.141,2.136-.637a.728.728,0,0,0,.321.041,6.594,6.594,0,0,1,3.762,1.3,2.474,2.474,0,0,0,1.7.5,8.621,8.621,0,0,1,1.715.237,7.47,7.47,0,0,0,4.672-1.529,18.172,18.172,0,0,0,2.125-1.679,10.4,10.4,0,0,1,3.951-2.2c1.037-.345,2.145-.47,3.206-.729a25.153,25.153,0,0,1,3.3-.2,2.749,2.749,0,0,1,1.8.571c1.176.729,2.292,1.552,3.46,2.293a4.51,4.51,0,0,0,1.81.526,6.919,6.919,0,0,0,3.283-.514c.85-.3,1.658-.723,2.478-1.1a36.368,36.368,0,0,0,3.917-2.283A11.191,11.191,0,0,1,60.485.674a7.446,7.446,0,0,0,1.4-.442A10.125,10.125,0,0,1,64.919,0"
                    transform="translate(0 0)"
                    fill="#35b8be"
                  />
                </svg>
              </div>
              <h3 className="d-flex  justify-content-center mt-2 ">Flats</h3>
            </div>
            <div className="box ">
              <h2 className="d-flex  justify-content-center mb-4 ">9</h2>
              <div className="d-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="wave_blue"
                  data-name="wave blue"
                  width="84.325"
                  height="18.066"
                  viewBox="0 0 84.325 18.066"
                >
                  <path
                    id="Fill_13"
                    data-name="Fill 13"
                    d="M64.919,0c1.066.6,2.071,1.26,3.148,1.758a17.269,17.269,0,0,0,3.57,1.2,9.835,9.835,0,0,0,3.092.436,5.439,5.439,0,0,0,2.5.212c.343.012.689-.191,1.036-.2.374-.007.707-.192,1.038-.214,1.222-.082,2.327-.647,3.533-.77.089-.009.167-.121.281-.21l1.031.678-.956.707h1.13l-.309.721.238.384a4.791,4.791,0,0,1-.561,1.349,8.14,8.14,0,0,1-1.571,1.362,1.524,1.524,0,0,1-.9.253c-.666-.027-1.262.4-1.943.255-.1-.022-.236.125-.374.2l-.138-.39H74.542a2.646,2.646,0,0,0,1.289.171c.489.011.979,0,1.468,0a2.909,2.909,0,0,1,1.3.225c-.852,0-1.7,0-2.557,0a5.521,5.521,0,0,1-2.976-.449,9.841,9.841,0,0,1-2.889-.652A2.6,2.6,0,0,1,69,6.334l-.2.206a17.021,17.021,0,0,0-2.067-1.084c-.5-.187-.7-.737-1.238-.836a3.037,3.037,0,0,1-.666-.332c-.328-.108-.858.246-1.25-.21l-.191.191L63.091,4.1l-.162.4h-.374l.207-.342c-.063-.029-.147-.1-.186-.081-.282.138-.558.291-.832.446-.245.139-.485.287-.784.466L60.63,4.78l-.2.425-.172-.159c-.232.188-.449.507-.7.54a10.871,10.871,0,0,0-1.837.768,2.664,2.664,0,0,0-.869.618A10.334,10.334,0,0,1,53.9,8.845l-.269-.251-.433.437h-.969l-.413.678h-.4c-.13.164-.22.4-.373.45-.71.244-1.359.745-2.218.274a1.867,1.867,0,0,0-1.412.152l1.358.083-.006.131H47.256l-.171-.485c-.531.509-1.075.312-1.6.082A8.85,8.85,0,0,1,43.367,9.21,11.046,11.046,0,0,0,40.6,7.461a2.468,2.468,0,0,1-.347-.23H38.93c-.043-.066-.08-.1-.074-.118s.052-.053.075-.082c.039-.051.073-.1.14-.2h-.809l-.154-.454L37.644,6.3l.269.384-.238.262.707.14c-1.48.237-2.895.825-4.4.576a1.393,1.393,0,0,1-1.58.933c-.96.884-1.917,1.81-2.923,2.68a8.515,8.515,0,0,1-3.58,1.966c-1.128.261-2.322.687-3.508.106a.76.76,0,0,0-.336-.005,6.508,6.508,0,0,1-3.121-.917c-.413-.2-.734-.582-1.142-.792a8.3,8.3,0,0,0-1.8-.583,15.228,15.228,0,0,0-3.3-.188,8.665,8.665,0,0,0-2.977.442.554.554,0,0,1-.334,0c-.1-.035-.171-.136-.279-.229l-.163.485-.549-.209c-.02.076-.047.177-.092.35-.916.262-1.665,1.141-2.785.963l-.334.334.241.269A10.53,10.53,0,0,0,3.84,14.475,8.633,8.633,0,0,1,2.263,15.98l-.316.672-.565.324c-.063.681-.063.681-.4,1.09L0,17.087V15.112c.049-.034.377-.15.389-.292.048-.581.648-.757.813-1.234A3.745,3.745,0,0,1,2.155,12.4c.464-.517.92-1.043,1.357-1.583A9.746,9.746,0,0,1,8.391,7.908c.439-.1.85-.314,1.284-.439.41-.118.86.153,1.282-.207.174-.148.581-.024.622-.024l.706.362-.347.482h1.381l-.713-.249c.619-.649,1.212-1.141,2.136-.637a.728.728,0,0,0,.321.041,6.594,6.594,0,0,1,3.762,1.3,2.474,2.474,0,0,0,1.7.5,8.621,8.621,0,0,1,1.715.237,7.47,7.47,0,0,0,4.672-1.529,18.172,18.172,0,0,0,2.125-1.679,10.4,10.4,0,0,1,3.951-2.2c1.037-.345,2.145-.47,3.206-.729a25.153,25.153,0,0,1,3.3-.2,2.749,2.749,0,0,1,1.8.571c1.176.729,2.292,1.552,3.46,2.293a4.51,4.51,0,0,0,1.81.526,6.919,6.919,0,0,0,3.283-.514c.85-.3,1.658-.723,2.478-1.1a36.368,36.368,0,0,0,3.917-2.283A11.191,11.191,0,0,1,60.485.674a7.446,7.446,0,0,0,1.4-.442A10.125,10.125,0,0,1,64.919,0"
                    transform="translate(0 0)"
                    fill="#35b8be"
                  />
                </svg>
              </div>
              <h3 className="d-flex  justify-content-center mt-2 ">Rooms</h3>
            </div>
            <div className="box">
              <h2 className="d-flex  justify-content-center  mb-4 ">10</h2>
              <div className="d-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="wave_blue"
                  data-name="wave blue"
                  width="84.325"
                  height="18.066"
                  viewBox="0 0 84.325 18.066"
                >
                  <path
                    id="Fill_13"
                    data-name="Fill 13"
                    d="M64.919,0c1.066.6,2.071,1.26,3.148,1.758a17.269,17.269,0,0,0,3.57,1.2,9.835,9.835,0,0,0,3.092.436,5.439,5.439,0,0,0,2.5.212c.343.012.689-.191,1.036-.2.374-.007.707-.192,1.038-.214,1.222-.082,2.327-.647,3.533-.77.089-.009.167-.121.281-.21l1.031.678-.956.707h1.13l-.309.721.238.384a4.791,4.791,0,0,1-.561,1.349,8.14,8.14,0,0,1-1.571,1.362,1.524,1.524,0,0,1-.9.253c-.666-.027-1.262.4-1.943.255-.1-.022-.236.125-.374.2l-.138-.39H74.542a2.646,2.646,0,0,0,1.289.171c.489.011.979,0,1.468,0a2.909,2.909,0,0,1,1.3.225c-.852,0-1.7,0-2.557,0a5.521,5.521,0,0,1-2.976-.449,9.841,9.841,0,0,1-2.889-.652A2.6,2.6,0,0,1,69,6.334l-.2.206a17.021,17.021,0,0,0-2.067-1.084c-.5-.187-.7-.737-1.238-.836a3.037,3.037,0,0,1-.666-.332c-.328-.108-.858.246-1.25-.21l-.191.191L63.091,4.1l-.162.4h-.374l.207-.342c-.063-.029-.147-.1-.186-.081-.282.138-.558.291-.832.446-.245.139-.485.287-.784.466L60.63,4.78l-.2.425-.172-.159c-.232.188-.449.507-.7.54a10.871,10.871,0,0,0-1.837.768,2.664,2.664,0,0,0-.869.618A10.334,10.334,0,0,1,53.9,8.845l-.269-.251-.433.437h-.969l-.413.678h-.4c-.13.164-.22.4-.373.45-.71.244-1.359.745-2.218.274a1.867,1.867,0,0,0-1.412.152l1.358.083-.006.131H47.256l-.171-.485c-.531.509-1.075.312-1.6.082A8.85,8.85,0,0,1,43.367,9.21,11.046,11.046,0,0,0,40.6,7.461a2.468,2.468,0,0,1-.347-.23H38.93c-.043-.066-.08-.1-.074-.118s.052-.053.075-.082c.039-.051.073-.1.14-.2h-.809l-.154-.454L37.644,6.3l.269.384-.238.262.707.14c-1.48.237-2.895.825-4.4.576a1.393,1.393,0,0,1-1.58.933c-.96.884-1.917,1.81-2.923,2.68a8.515,8.515,0,0,1-3.58,1.966c-1.128.261-2.322.687-3.508.106a.76.76,0,0,0-.336-.005,6.508,6.508,0,0,1-3.121-.917c-.413-.2-.734-.582-1.142-.792a8.3,8.3,0,0,0-1.8-.583,15.228,15.228,0,0,0-3.3-.188,8.665,8.665,0,0,0-2.977.442.554.554,0,0,1-.334,0c-.1-.035-.171-.136-.279-.229l-.163.485-.549-.209c-.02.076-.047.177-.092.35-.916.262-1.665,1.141-2.785.963l-.334.334.241.269A10.53,10.53,0,0,0,3.84,14.475,8.633,8.633,0,0,1,2.263,15.98l-.316.672-.565.324c-.063.681-.063.681-.4,1.09L0,17.087V15.112c.049-.034.377-.15.389-.292.048-.581.648-.757.813-1.234A3.745,3.745,0,0,1,2.155,12.4c.464-.517.92-1.043,1.357-1.583A9.746,9.746,0,0,1,8.391,7.908c.439-.1.85-.314,1.284-.439.41-.118.86.153,1.282-.207.174-.148.581-.024.622-.024l.706.362-.347.482h1.381l-.713-.249c.619-.649,1.212-1.141,2.136-.637a.728.728,0,0,0,.321.041,6.594,6.594,0,0,1,3.762,1.3,2.474,2.474,0,0,0,1.7.5,8.621,8.621,0,0,1,1.715.237,7.47,7.47,0,0,0,4.672-1.529,18.172,18.172,0,0,0,2.125-1.679,10.4,10.4,0,0,1,3.951-2.2c1.037-.345,2.145-.47,3.206-.729a25.153,25.153,0,0,1,3.3-.2,2.749,2.749,0,0,1,1.8.571c1.176.729,2.292,1.552,3.46,2.293a4.51,4.51,0,0,0,1.81.526,6.919,6.919,0,0,0,3.283-.514c.85-.3,1.658-.723,2.478-1.1a36.368,36.368,0,0,0,3.917-2.283A11.191,11.191,0,0,1,60.485.674a7.446,7.446,0,0,0,1.4-.442A10.125,10.125,0,0,1,64.919,0"
                    transform="translate(0 0)"
                    fill="#35b8be"
                  />
                </svg>
              </div>
              <h3 className="d-flex  justify-content-center mt-2 ">Messes</h3>
            </div>
          </div>
        </div>
      </Fragment>
    </Main>
  );
};
const Main = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  .main{
    height: 40vh; 
  }
 .box {
    color:white ;
     
    h2 {
      font-weight:bold;
      font-size: 40px; 
    }
  }  
  @media only screen and (max-width: 767px) {
    .main{
    height: 30vh; 
  }
 .box {
    color:white ;
     
    h2 {
      font-weight:bold;
      font-size: 25px; 
    }
  }
  }
`;

export default Counting_room_data;