import React from 'react';
import { useState } from 'react';
import ApiDb from '../Api/ApiDb';
import Axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Search = (props) => {

  const history = useHistory();
  const query = props.match.params.q;
  const [result, setResult] = useState([{}]);
  const [finalSearch, setFinalSearch] = useState([{}]);
  
  let resultSearch = [];

  const search = async query => {
    for (let index = 1; index < 2; index++) {
      try{
        const data = await Axios
        .get(ApiDb.searchMulti(query, index));
        resultSearch.push(data.data.results);
      }catch (error) {
        console.log(error);
      }
    }
    
    if(resultSearch[0].media_type === "tv"){
      try{
        const data = await Axios
        .get(ApiDb.findSimilarTvs(multiPage[0].id));
        resultSearch.push(data.data.results);
       
      }catch (error) {
        console.log(error);
      }
    }else{
      try{
        const data = await Axios
        .get(ApiDb.findSimilarMovies(multiPage[0].id)); 
        resultSearch.push(data.data.results);
      }catch (error) {
        console.log(error);
      }
    }
    setResult(resultSearch);
  }
  
  let multiPage = [];

  result.forEach(element => {
    for (let index = 0; index < element.length; index++) {
      if(element[index].backdrop_path !== undefined && element[index].backdrop_path !== null){
        multiPage.push(element[index]);
      }
    }
  });
  
  function getUnique(arr, comp) {

    const finalSearch = arr
         .map(e => e[comp])
  
       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
  
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
      setFinalSearch(finalSearch);
  }

  const handleClick = (id, media) => {
    if(media === 'tv'){
      history.replace("/tvshows/" + id);
    }else{
      history.replace("/movies/" + id);
    }
  }

  useEffect(() => {
    search(query); getUnique(multiPage,'id')
  }, [query])


  return ( <>
    <div className="search-content">
    {
      finalSearch.map(item => 
        <div key={item.id} onClick={() => handleClick(item.id, item.media_type)} className="item">
        <span>{(item.title === null )? item.name : item.title}</span>
        {
          <img className="" src={"https://image.tmdb.org/t/p/w400/"+ item.backdrop_path} alt=""/>
        }
        </div>
      )
    }
    </div>
  </> );
}
 
export default Search;