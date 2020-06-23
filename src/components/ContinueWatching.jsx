import React, { useState, useRef } from 'react';
import '../css/ContinueWatching.scss';
import { Link } from 'react-router-dom';


const ContinueWatching = (props) => {

  const userList = [
    {type:"tvshow", title: "Game of Thrones", season: "1", episode: "4", timeLine: "60", imgUrl: "https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/07/got.png", urlVideo: process.env.PUBLIC_URL + '/video/got.mp4'},
    {type:"movie", title: "Interstellar", timeLine: "40", imgUrl: "https://image.tmdb.org/t/p/w300/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg", urlVideo: process.env.PUBLIC_URL + '/video/interstellar.mp4'},
    {type:"movie", title: "Mamma Mia", timeLine: "70", imgUrl: "https://www.denia.com/wp-content/uploads/2019/06/mamma-mia.jpg", urlVideo: process.env.PUBLIC_URL + '/video/mamma.mp4'},
    {type:"tvshow", title: "The Big Bang Theories", season: "5", episode: "12", timeLine: "20", imgUrl: "https://cdn.radiofrance.fr/s3/cruiser-production/2017/12/35091145-527d-498d-a730-2f329bd15653/838_the-big-bang-theory.jpg", urlVideo: process.env.PUBLIC_URL + '/video/bigbang.mp4'},
    {type:"movie", title: "Mission:Impossible Fallout", timeLine: "40", imgUrl: "https://photos.lci.fr/images/613/344/mission-impossible-6-photo6-2000x940-2cd298-0@1x.jpeg"},
    {type:"tvshow", title: "True Detective", season: "2", episode: "2", timeLine: "10", imgUrl: "https://i.f1g.fr/media/figarofr/orig/2014/06/06/PHO480451dc-ed8a-11e3-8c10-7a6e01fec63d-805x453.jpg"},
    {type:"tvshow", title: "the handmaid's tale", season: "1", episode: "3", timeLine: "20", imgUrl: "http://www.leparisien.fr/resizer/ZCi3AbZkkZuks4bDF-ejQjaCucE=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/4LW6UPBPJA6SW2L4H4PGGUQK7A.jpg"},
    {type:"tvshow", title: "Chernobyl", season: "3", episode: "1", timeLine: "20", imgUrl: "https://www.pieuvre.ca/wp-content/uploads/2019/11/chernobyl-screen02.jpg"},
  ]

  const countList = userList.length;
  
  const [maLeft, setMaLeft] = useState(0);
  const videoRef = useRef();

  const handlePageRight = () => {
    if(maLeft === 0){
      setMaLeft(-1250)
    }else if(maLeft === -1250){
      setMaLeft(-2050)
    }
  }

  const handlePageLeft = () => {
    if(maLeft === -1250){
      setMaLeft(0)
    }else if(maLeft === -2050){
      setMaLeft(-1250)
    }
  }

  const handlePause = (event) => {
    event.currentTarget.pause();
  }

  const handlePlay = (event) => {
    event.currentTarget.play();
  }

  return ( <>
    <div className="header-part">
      <h3>Continue Watching</h3>
      <div className="list-nav">
      <div className="list-nav-left" onClick={handlePageLeft} ><ion-icon name="play-sharp"></ion-icon></div>
      <p>See All {countList}</p>
      <div onClick={handlePageRight} className="list-nav-right"><ion-icon name="play-sharp"></ion-icon></div>
    </div>
    </div>
    <div className="continue-watching">
      <div className="cw-items" style={{ left : maLeft+"px"}} >
        {
          userList.map((item, index) => 
          <div className="cw-item" key={index} >
            <div className="cw-item-media">
              <img src={item.imgUrl} alt={item.title} />
              <div className="cw-item-btn">
                <ion-icon name="play-sharp"></ion-icon>
              </div>
              <div className="cw-item-video">
                <video ref={videoRef} onMouseOver={handlePlay} onMouseOut={handlePause} autoPlay muted src={item.urlVideo} ></video>
              </div>
            </div>
            <div className="cw-item-info">
              {
                item.type === 'tvshow' ? (<>
                  <h4>{item.title}</h4>
                  <p>Saison {item.season} Episode {item.episode}</p></>
                  ) : (  
                  <h4 className="cw-item-info-h4-movie">{item.title}</h4>
                )
              }
              <div className="cw-timeline-gradient" style={{ width: item.timeLine + '%'}}></div>
              <div className="cw-timeline"></div>
            </div>
          </div>)
        }
        
      </div>
    </div>

  </> );
}
 
export default ContinueWatching;