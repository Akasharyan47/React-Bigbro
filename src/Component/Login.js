import React from 'react';
import styled from 'styled-components'; 

const Login = () => {

  return (
    <Main>
      <div className="ModalDialogstyles__StyledModalBase-rui__sc-1eb0o4f-0 bsWOhy ">


        <div className="modal-overlay modal-overlay-open">
          <div className="modal-dialogg modal-dialog-open" >

            <div data-testid="modal-content" className="ModalContentstyles__StyledModalContent-rui__sc-1w2qhdn-0 EwmSs">

              <div   className="Modalstyles__StyledCustomHeading-rui__w1itha-0 dMZvKt">
                <div className="sc-dlnjwi dJXsSm">
                  <h2 className="Text__StyledText-rui__sc-19ei9fn-0 eXfzyb TypeDisplaySmall__StyledDisplaySmall-rui__wbiuo8-0 bRRffl" style={{ margin: "10px 0px" }}>
                    Log in or create an account</h2> 
                   <button aria-label="Close" data-testid="close-button" className="CloseButton__StyledCloseButton-rui__sc-162cljy-0 lkclNi custom-modal-header-close-toggle"></button>  
              </div>
              </div>  
 
              <div data-testid="modal-body" className="ModalBodystyles__StyledModalBody-rui__sc-15tl5r9-0 eUMlRW">
                <div className="sc-hKFxyN kksiKu">
                  <div>

                    <div>
                      <form novalidate="">
                        <div className="FormGroup__StyledFormGroup-rui__sc-14rju5h-0 llDGmJ form-group-default">
                          <div className="TextInputstyles__StyledWrapper-rui__sih3wv-0 bmoYvc">
                            <div className="LabelWrapperstyles__StyledLabelWrapper-rui__xiucf9-0 cgGKzQ label-wrapper">
                              <label for="raas_email" data-testid="text-input-label" data-name="label" className="Text__StyledText-rui__sc-19ei9fn-0 dEYYQ TypeInfo__StyledInfo-rui__m9gzjc-0 dvUWaJ Label__StyledLabel-rui__sc-1by3ei1-0 lijvTn">Email address</label>
                              <span data-testid="text-input-label-required-text" className="LabelWrapperstyles__StyledRequiredText-rui__xiucf9-1 gtyzJJ">required</span>
                            </div>
                            <div className="TextInputstyles__StyledInputWrapper-rui__sih3wv-1 htbVdq">
                              <div data-name="input-group" className="InputGroup-rui__hn7d6j-0 fXZuIo">
                                <input aria-invalid="false" autocomplete="email" id="raas_email" placeholder="Enter your email" required="" type="email" data-testid="email-input" aria-label="Enter email" data-name="input-element" aria-required="true" className="InputElement-rui__kzcwvy-0 htvheH" ></input>
                              </div>
                            </div>
                            <p id="raas_email_helper" tabindex="-1" data-testid="text-input-helpertext" className="TextInputstyles__StyledHelperText-rui__sih3wv-2 eMTfzB"></p>
                          </div>
                        </div>
                        <button class="base__StyledButton-rui__ermeke-1 ckMMPd" data-testid="continue-button" type="submit">Continue</button>
                        <div style={{width:"100%", height:"15px", borderBottom:"1px solid black", textAlign:"center", margin:"10px 0px 24px"}}>
                          <span style={{fontSize:"14px", backgroundColor:"rgb(255, 255, 255)", padding:"4px 10px 0px", display: "inline-block", margin: "0px"}}>or</span>
                        </div>
                      </form>
                    </div>

                    <button className="SocialButtonBasestyles__StyledSocialButtonBase-rui__sc-1cy3yr0-0 frkQlO">
                      <span className="base__StyledIcon-rui__ermeke-2 bbhlCr">
                        <svg data-testid="icon-google-color" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ display: "inline-block", width: "1em", height: "1em", fontSize: "24px", color: "inherit", fill: "currentcolor" }}>
                          <g clip-path="url(#IconGoogleColor_svg__a)"><path d="M5.319 14.503l-.835 3.12-3.054.064A11.946 11.946 0 010 12c0-1.99.484-3.866 1.342-5.519l2.719.499 1.19 2.702A7.133 7.133 0 004.868 12c0 .88.16 1.725.452 2.503z" fill="#FBBB00"></path>

                            <path d="M23.79 9.758a12.027 12.027 0 01-.053 4.747 11.997 11.997 0 01-4.224 6.853h-.001l-3.424-.175-.485-3.025a7.152 7.152 0 003.078-3.652h-6.417V9.758H23.79z" fill="#518EF8"></path><path d="M19.512 21.357A11.95 11.95 0 0112 24c-4.57 0-8.543-2.554-10.57-6.313l3.889-3.184a7.135 7.135 0 0010.284 3.654l3.909 3.2z" fill="#28B446"></path>
                            <path d="M19.66 2.763l-3.888 3.182a7.137 7.137 0 00-10.52 3.736l-3.91-3.2A11.998 11.998 0 0112 0a11.95 11.95 0 017.66 2.763z" fill="#F14336"></path></g>
                          <defs><clipPath id="IconGoogleColor_svg__a">

                            <path d="M0 0h24v24H0z" fill="#fff"></path></clipPath></defs></svg></span>
                      <span className="SocialButtonBasestyles__SocialButtonText-rui__sc-1cy3yr0-1 jkDLQg">Continue with Google</span>
                    </button>
                    <button className="SocialButtonBasestyles__StyledSocialButtonBase-rui__sc-1cy3yr0-0 fzdAOS">
                      <span className="base__StyledIcon-rui__ermeke-2 bbhlCr"><svg data-testid="icon-facebook" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ display: "inline-block", width: "1em", height: "1em", fontSize: "24px", color: "inherit", fill: "currentcolor" }}>
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg></span>
                      <span className="SocialButtonBasestyles__SocialButtonText-rui__sc-1cy3yr0-1 jkDLQg">Continue with Facebook</span>
                    </button>

                    <button className="SocialButtonBasestyles__StyledSocialButtonBase-rui__sc-1cy3yr0-0 bMahpj">
                      <span className="base__StyledIcon-rui__ermeke-2 bbhlCr">
                        <svg data-testid="icon-apple" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ display: "inline-block", width: "1em", height: "1em", fontSize: "24px", color: "inherit", fill: "currentcolor" }}>
                          <path clip-rule="evenodd" d="M16.105 2a4.475 4.475 0 01-1.023 3.206 3.765 3.765 0 01-2.973 1.406 4.256 4.256 0 011.05-3.088A4.553 4.553 0 0116.105 2zm2.078 8.451a4.544 4.544 0 00-.593 2.185 4.393 4.393 0 002.682 4.04 10.067 10.067 0 01-1.395 2.84c-.821 1.23-1.683 2.43-3.05 2.452-.65.015-1.089-.172-1.546-.367-.477-.203-.974-.415-1.752-.415-.825 0-1.344.219-1.845.43-.433.182-.852.358-1.442.383-1.302.048-2.297-1.312-3.148-2.529-1.702-2.486-3.027-7.006-1.25-10.08a4.882 4.882 0 014.108-2.506c.738-.016 1.447.269 2.068.519.475.19.899.36 1.246.36.305 0 .717-.163 1.197-.354.757-.3 1.683-.667 2.626-.568a4.653 4.653 0 013.666 1.981 4.545 4.545 0 00-1.572 1.629z" fill-rule="evenodd"> </path>
                        </svg>
                      </span>
                      <span className="SocialButtonBasestyles__SocialButtonText-rui__sc-1cy3yr0-1 jkDLQg ">Continue with Apple</span>
                    </button>
                    <button className="SocialButtonBasestyles__StyledSocialButtonBase-rui__sc-1cy3yr0-0 bnpJoT ">
                      <span className="base__StyledIcon-rui__ermeke-2 bbhlCr">
                        <svg data-testid="icon-mail" viewBox="0 0 512 512" aria-hidden="true" focusable="false" style={{ display: "inline-block", width: "1em", height: "1em", fontSize: "24px", color: "inherit", fill: "currentcolor" }}>
                          <path d="M409 92H105c-33 0-60 27-60 59v210c0 32 27 59 60 59h302c33 0 60-27 60-59V149c0-31-26-57-58-57zm28 269c0 16-13 29-30 29H105c-17 0-30-13-30-29V151c0-16 13-29 30-29h304c15 0 28 12 28 27zm-29-181c-4-5-10-6-15-2l-122 93c-6 5-14 5-20 0l-132-95c-2-1-5-2-8-1-2 0-5 2-6 4-2 2-3 5-2 8 0 3 1 5 4 7l83 60-75 72c-2 2-3 4-3 7s1 6 3 8 5 3 8 3c2 0 5-1 6-3l76-72c1 0 2-1 3-3l31 22c6 4 14 7 21 7 9 0 17-3 23-8l29-21 79 75c2 2 5 3 8 3 2 0 5-1 7-3s3-5 3-8c0-2-1-5-3-7l-76-72 75-59c3-2 4-5 5-7 0-3 0-6-2-8z"></path>
                        </svg>
                      </span>
                      <span className="SocialButtonBasestyles__SocialButtonText-rui__sc-1cy3yr0-1 jkDLQg ">Email Me a Link</span>
                    </button>

                  </div>
                  
                  <div style={{ textAlign: "center", paddingTop: "29px" }}>
                    <p data-testid="professional-login-description" className="Text__StyledText-rui__sc-19ei9fn-0 dEYYQ TypeBody__StyledBody-rui__sc-163o7f1-0 gVxVge" style={{ marginBottom: "0px", fontWeight: "bold" }}> Are you a real estate agent? </p>
                    <div className="Text__StyledText-rui__sc-19ei9fn-0 dEYYQ TypeInfo__StyledInfo-rui__m9gzjc-0 dvUWaJ">
                      <button className="base__StyledButton-rui__ermeke-1 cXidVq" type="button">Log in</button> or
                      <button className="base__StyledButton-rui__ermeke-1 cXidVq" type="button">create an account</button> here
                    </div>
                  </div>
                  <div style={{ textAlign: "center", paddingTop: "29px" }}>
                    <div data-testid="terms-and-policy-description" className="Text__StyledText-rui__sc-19ei9fn-0 dEYYQ TypeInfo__StyledInfo-rui__m9gzjc-0 dvUWaJ" style={{ marginBottom: "0px" }}> By creating an account you agree to Realtor.com's </div>
                    <div className="Text__StyledText-rui__sc-19ei9fn-0 dEYYQ TypeInfo__StyledInfo-rui__m9gzjc-0 dvUWaJ">
                      <button className="base__StyledButton-rui__ermeke-1 cXidVq" target="_blank" type="button">Terms of Use</button> and
                      <button className="base__StyledButton-rui__ermeke-1 cXidVq" target="_blank" type="button">Privacy Policy.</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div> 
    </Main>
  )
}
const Main = styled.section`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box; 
    font-family: Roboto,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
    font-weight: 400;
    margin: 0;

    div {
    display: block;
   } 
 .bsWOhy .modal-overlay.modal-overlay-open {
    display: block; 
    overflow: hidden auto; 
    inset: 0px;
    z-index: 1040;
    outline: 0px;
    background-color: rgba(0, 0, 0, 0.6);
  } 
  .bsWOhy .modal-overlay { 
    transition: background-color 300ms cubic-bezier(0, 0, 0.14, 1) 0s;
  }
 .modal-overlay.modal-overlay-open {
    z-index: 1051 !important;
 } 
 .bsWOhy .modal-dialog.modal-dialog-open {
    outline: 0px;
    transform: translateY(0px);
  } 
@media (min-width: 768px){
  .bsWOhy .modal-dialogg {
    width: 385px;
}
} 
@media (min-width: 768px) and (max-width: 995px){
  .bsWOhy .modal-dialog {
    width: 760px;
} 
}
 

.bsWOhy .modal-dialogg {
    position: relative;
    z-index: 1050; 
    transition: transform 300ms cubic-bezier(0, 0, 0.14, 1) 0s;
    margin: 30px auto;
}
@media (max-width: 767px){
  .EwmSs {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
}
.EwmSs {
    position: relative;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 40%) 0px 0px 10px 1px;
    background-clip: padding-box;
    outline: 0px;
    overflow: hidden;
}
@media (max-width: 767px){
  .dMZvKt {
    outline: 0px;
}
}
.dJXsSm {
    padding: 35px 25px 0px;
    font-family: Roboto, sans-serif;
}
@media (max-width: 767px){
  .bRRffl {
    font-size: 20px;
    line-height: 28px;
}
} 
.eXfzyb {
    text-align: inherit;
    color: rgb(43, 43, 43);
    font-weight: 700;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
}
.dJXsSm .custom-modal-header-close-toggle {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 99;
    margin: 10px 0px;
} 
.lkclNi {
    background-color: transparent;
    background-image: none;
    border: 0px;
    cursor: pointer;
    height: 20px;
    overflow: hidden;
    padding: calc(10px);
    position: relative;
    width: 20px;
}
button, input, select, textarea { 
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
button, select {
    text-transform: none;
}
button {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
.lkclNi::before {
    transform: rotate(45deg);
} 
.lkclNi::before, .lkclNi::after {
    background-color: rgb(43, 43, 43);
    content: " ";
    height: 20px;
    position: absolute;
    top: 0px;
    width: 2px;
}
.lkclNi::after {
    transform: rotate(-45deg);
} 
.lkclNi::before, .lkclNi::after {
    background-color: rgb(43, 43, 43);
    content: " ";
    height: 20px;
    position: absolute;
    top: 0px;
    width: 2px;
}


${'' /*  2nd part  */}

.eUMlRW {
    overflow-y: auto;
}
.kksiKu {
    margin: 0px 25px 25px;
}
form {
    display: block;
    margin-top: 0em;
}
.llDGmJ {
    display: flex;
    flex-direction: column;
}
.bmoYvc {
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
}.cgGKzQ {
   display: flex; 
}
.cgGKzQ label {
    font-size: 14px;
} 
.lijvTn {
    color: rgb(43, 43, 43);
    line-height: 24px;
    margin-bottom: 0px;
    margin-top: 0px;
    cursor: pointer;
} 
.dvUWaJ {
    font-size: 14px;
    line-height: 20px;
} 
.dEYYQ {
    text-align: inherit;
    color: rgb(43, 43, 43);
    font-weight: 400;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
}
.gtyzJJ {
    margin-left: auto;
    color: rgb(117, 117, 117);
    font-size: 12px;
    margin-bottom: 0px;
}
.htbVdq {
    display: flex;
    position: relative;
}
.eMTfzB {
    color: rgb(117, 117, 117);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12px;
    margin: 4px 0px 0px;
}

p {
    margin-top: 0;
}
.bmoYvc .InputGroup-rui__hn7d6j-0 {
    border-radius: 4px;
} 
.fXZuIo {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    border: 1px solid rgb(160, 160, 160);
    border-radius: 4px;
    min-height: 40px;
    max-width: 100%;
    transition: border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    background-color: rgb(255, 255, 255);
}
.htvheH {
    border: none;
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    padding: 0px 16px;
    width: 100%;
    background-color: transparent;
} 
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
input {
    line-height: normal;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
.ckMMPd {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    touch-action: manipulation;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    cursor: pointer;
    transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    vertical-align: middle;
    font-size: 14px;
    border-radius: 36px;
    border: 1px solid rgb(217, 34, 40);
    height: 36px;
    text-decoration: none;
    text-align: center;
    padding: 0px 16px;
    font-weight: 400;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(217, 34, 40);
}
 
svg:not(:root) {
    overflow: hidden;
}

audio, canvas, iframe, img, svg, video {
    vertical-align: middle;
    border: none;
} 
svg:not(:root) {
    overflow-clip-margin: content-box;
    overflow: hidden;
}
 
.jkDLQg {
    margin-left: 16px;
}

@media (max-width: 767px) {
.gVxVge {
    font-size: 16px;
    line-height: 20px;
}
} 

.frkQlO { 
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    touch-action: manipulation;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    cursor: pointer;
    transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    vertical-align: middle;
    font-size: 14px;
    border-radius: 36px;
    border: 1px solid rgb(160, 160, 160);
    height: 36px;
    text-decoration: none;
    text-align: center;
    padding: 0px 16px;
    font-weight: 400;
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: stretch;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
}

button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
button, select {
    text-transform: none;
}
button {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
} 
button {
    appearance: auto;
    writing-mode: horizontal-tb !important; 
    text-rendering: auto;
 
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box; 
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
}
.frkQlO > span:last-child {
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-left: -24px;
}
 
.jkDLQg {
    margin-left: 16px;
}
svg:not(:root) {
    overflow: hidden;
}

audio, canvas, iframe, img, svg, video {
    vertical-align: middle;
    border: none;
}
   
:not(svg) {
    transform-origin: 0px 0px;
}
.fzdAOS { 
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    touch-action: manipulation;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    cursor: pointer;
    transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    vertical-align: middle;
    font-size: 14px;
    border-radius: 36px;
    border: 1px solid rgb(24, 119, 242);
    height: 36px;
    text-decoration: none;
    text-align: center;
    padding: 0px 16px;
    font-weight: 400;
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: stretch;
    color: rgb(255, 255, 255);
    background-color: rgb(24, 119, 242);
}
.fzdAOS > span:last-child {
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-left: -24px;
}
.bMahpj > span:last-child {
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-left: -24px;
}
.bMahpj {
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    touch-action: manipulation;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    cursor: pointer;
    transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    vertical-align: middle;
    font-size: 14px;
    border-radius: 36px;
    border: 1px solid rgb(0, 0, 0);
    height: 36px;
    text-decoration: none;
    text-align: center;
    padding: 0px 16px;
    font-weight: 400;
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: stretch;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
}
.bnpJoT > span:last-child {
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-left: -24px;
}
.bnpJoT {
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    touch-action: manipulation;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    cursor: pointer;
    transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    vertical-align: middle;
    font-size: 14px;
    border-radius: 36px;
    border: 1px solid rgb(217, 34, 40);
    height: 36px;
    text-decoration: none;
    text-align: center;
    padding: 0px 16px;
    font-weight: 400;
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: stretch;
    color: rgb(255, 255, 255);
    background-color: rgb(217, 34, 40);
} 
.dEYYQ {
    text-align: inherit;
    color: rgb(43, 43, 43);
    font-weight: 400;
}
p {
    margin-top: 0;
}
.dvUWaJ {
    font-size: 14px;
    line-height: 20px;
} 
.cXidVq {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    touch-action: manipulation;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    cursor: pointer;
    transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s, border-color 100ms cubic-bezier(0.5, 0, 0.2, 1) 0s;
    vertical-align: inherit;
    font-size: inherit;
    height: auto;
    border-radius: 0px;
    border: 0px transparent;
    padding: 0px;
    font-weight: 700;
    text-decoration: underline;
    color: rgb(30, 97, 217);
    background-color: transparent;
} 

 
`;
export default Login;