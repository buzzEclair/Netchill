import React from 'react';
import '../css/SpecialContent.scss';
import { useEffect } from 'react';


const SpecialContent = (props) => {

  const videoDelay = (props) => {
    const video = document.getElementById('video-smoke2');
    setTimeout(() => {
      video.play();
     }, 3000);
  }

  useEffect(() => {
    videoDelay();
  });

  return ( <>
    <div className="special-content">
      <h2>new season</h2>
      <div className="content-movie-btn">
        <div className="movie-btn movie-btn-white">watch</div>
        <div className="movie-btn">add to watchlist</div>
      </div>
      <img className="skull" src={process.env.PUBLIC_URL + '/img/special/skull.png'} alt=""/>
      <video muted="muted" autoPlay="autoplay" loop={true} id="video-smoke" src={process.env.PUBLIC_URL + '/video/smoke.mp4'}></video>
      <video muted="muted" loop={true} autoPlay="" id="video-smoke2" src={process.env.PUBLIC_URL + '/video/smoke.mp4'}></video>
     <img src={process.env.PUBLIC_URL + '/img/special/punisher.png'} alt="" className="bg-img"/>
    </div>
  </> );
}
 
export default SpecialContent;