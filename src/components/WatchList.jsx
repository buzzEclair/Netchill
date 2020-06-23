import React, { useState, useEffect } from 'react';
import '../css/WatchList.scss';
import ApiDb from '../Api/ApiDb';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const WatchList = (props) => {

  const [watchlist, setWatchlist] = useState([]);
  const history = useHistory();

  const fecthWatchList = async () => {
    try{
      const data = await Axios
        .get(ApiDb.discoverMovie);
        setWatchlist(data.data.results);
    }catch (error) {
      console.log(error);
    }
  }

  const handleClick = (id) => {
    history.replace("/movies/" + id);
  }

  useEffect(() => { fecthWatchList()}, []);

  return ( <>
    <div className="content-watchlist">
      {watchlist.map(item =>
        <div key={item.id} onClick={() => handleClick(item.id)} className="item">
          <img src={"https://image.tmdb.org/t/p/w300/" + item.poster_path} alt=""/>
        </div>  
      )}
    </div>
  </> );
}
 
export default WatchList;