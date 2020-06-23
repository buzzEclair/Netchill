import React, { useState, useEffect } from 'react';
import ApiDb from '../Api/ApiDb';
import Axios from 'axios';

const Notification = (props) => {

  const [listItems, setListItems] = useState([]);
  const [styleContent, setStyleContent] = useState({display: 'none'});

  const notifMovies = async () => {
    try{
      const data = await Axios
        .get(ApiDb.discoverTv);
        setListItems(data.data.results);
    }catch (error) {
      console.log(error);
    }
  }

  const handleEnter = () => {
    setStyleContent({display: 'block'})
  }
  const handleOut = () => {
    setStyleContent({display: 'none'})
  }

  useEffect(() => { notifMovies();}, []);

  return ( <>
    <div className="notif">
      <ion-icon onMouseEnter={handleEnter} onClick={handleOut} name="notifications-sharp"></ion-icon>
      <span className="notif-up"></span>
      <div className="notif-hidden"  onMouseLeave={handleOut} style={styleContent}>
        <ul>
          {
            listItems.map(item => 
            <li key={item.id}><img src={"https://image.tmdb.org/t/p/w400/"+ item.backdrop_path} alt=""/> <span>{item.name}</span></li>  
            )
          }
        </ul>
      </div>
    </div>
  </> );
}
 
export default Notification;