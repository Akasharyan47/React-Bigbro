import React, { Fragment } from 'react'
import styled from 'styled-components';
import AddBanner from "../image/AddBanner.png";
 
const AddPoster = () => {
    return (
        <Main>
            <Fragment>
                <div className='container-fluid'>
                    <div className='AddBanner'>
                        <div className="Banner" >
                            <img className='img-fluid' alt=" " src={AddBanner}></img>
                        </div>
                    </div>
                </div> 
            </Fragment>
        </Main>   
    )
};

const Main = styled.section` 
.AddBanner {
  width: 100%;
  height: min-context;
  padding:10px;

} 
`;



export default AddPoster;