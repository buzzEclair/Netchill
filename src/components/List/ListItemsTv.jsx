import React, { useState, useEffect } from 'react';
import '../../css/List.scss';
import { useHistory } from 'react-router-dom';

const ListItemsTv = ({title, items}) => {

  const history = useHistory();
  const countList = items.length;
  const itemsPerPage = 6;
  const pageLimit = Math.ceil(countList / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItem = items.slice(offset, offset + itemsPerPage);  

  const handlePlay = (event) => {
    event.target.play();
    event.target.currentTime = 0;
  }

  const handlePageRight = () => {
    if(currentPage !== pageLimit){
      setCurrentPage(currentPage + 1);
    }else{
      setCurrentPage(1);
    }


    if(currentItem.length < 6){
      const less = 6 - currentItem.length;
      console.log(less);
    }

    
  }

  
  const handlePageLeft = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1);
    }else{
      setCurrentPage(pageLimit);
    }  

  }


  

  const handleClick = (id) => {
    history.replace("/tvshows/" + id);
  }

  return ( <>
    <div className="header-part">
      <h3>{title}</h3>
    <div className="list-nav">
      <div className="list-nav-left" onClick={handlePageLeft} ><ion-icon name="play-sharp"></ion-icon></div>
      <p>See All {countList}</p>
      <div onClick={handlePageRight} className="list-nav-right"><ion-icon name="play-sharp"></ion-icon></div>
    </div>
    </div>
    <div className="list">
      {
        currentItem.map(item => 
        <div key={item.id} className="list-item-container">
          <div className="list-item">
            <h4><div className="ratio-circle">{item.vote_average * 10}%</div>Rating score</h4>
            <div className="list-item-video">
              <video onMouseOver={handlePlay} muted src={process.env.PUBLIC_URL + '/video/starwars.mp4'}  onClick={() => handleClick(item.id)}></video>
            </div>
            <img src={"https://image.tmdb.org/t/p/w300" + item.poster_path} alt=""/>
            <div className="list-item-title">{item.title}</div>
          </div>
            <div className="list-item-info">
              <p>2008 - 1h30</p>
              <div>
                <p>ACTION ADVENTURE</p>
                <p><ion-icon name="heart-sharp" /> <ion-icon name="information-circle-outline"></ion-icon></p>
              </div>
            </div>
        </div>
        )
      }
      
    </div>
  </> );
}
 
export default ListItemsTv;