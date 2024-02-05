import React from 'react'
import styled from 'styled-components'
import World from "../image/WorldMap.png"

const WorldMap = () => {
    return (
        <Main>
            <div className="container banner">
                <img src={World} />
            </div>
        </Main>

    )
}
const Main = styled.section`
.banner {
  width: 100%;
  height:min-context;
} 
.banner img {
  height : 100%;
  width: 100%;
}

`;

export default WorldMap;