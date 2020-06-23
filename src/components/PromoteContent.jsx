import React, { useState } from 'react';
import '../css/PromoteContent.scss';

const PromoteContent = ({message, synopsis, item}) => {

  return ( <>
    <div className="promote-content">
    <div className="promote-content-content">
        <video loop muted autoPlay src={item.video}></video>
        <div className="info">
          <img src={item.logo} alt=""/>
          <div className="message">
            {message}
          </div>
          <div className="synopsis">
            {synopsis}
          </div>
        </div>
      </div>
      <div className="promote-content-bg">
        <div className="overlay"></div>
        <img src={item.img} alt=""/>
      </div>
    </div>
  </> );
}
 
export default PromoteContent;