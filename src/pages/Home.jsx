import React, { useState, useEffect } from 'react';
import PromoteContent from '../components/PromoteContent';
import ContinueWatching from '../components/ContinueWatching';
import Axios from 'axios';
import ApiDb from '../Api/ApiDb';
import ListItemsTv from '../components/List/ListItemsTv';
import ListSliderMovies from '../components/List/ListSliderMovies';
import ListSliderTv from '../components/List/ListSliderTv';
import ListSliderTvshows from '../components/List/ListSliderTv';
import SpecialContent from '../components/SpecialContent';
import '../css/Home.scss';


const Home = (props) => {

  const [movieForYou, setMovieForYou] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [tvForYou, setTvForYou] = useState([]);

  const fecthMTvForYou = async () => {
    try{
      const data = await Axios
        .get(ApiDb.discoverTv);
        setTvForYou(data.data.results);
    }catch (error) {
      console.log(error);
    }
  }
  
  const fecthMovieForYou = async () => {
    try{
      const data = await Axios
        .get(ApiDb.discoverMovie);
        setMovieForYou(data.data.results);
    }catch (error) {
      console.log(error);
    }
  }

  const fetchActionMovies = async () => {
    try{
      const data = await Axios
        .get(ApiDb.fetchMoviesByGenreYear(18,2019));
        setActionMovies(data.data.results);
    }catch (error) {
      console.log(error);
    }
  }

  const promoteContent = {
    img: process.env.PUBLIC_URL + '/img/promote/formula.webp',
    logo: process.env.PUBLIC_URL + '/img/promote/formula-logo.webp',
    video: process.env.PUBLIC_URL + '/video/promote/formula.webp',

  }

  useEffect(() => { fecthMovieForYou();fecthMTvForYou(); fetchActionMovies();}, []);

  return ( <>
    <SpecialContent></SpecialContent>
    
    <ListSliderMovies  title="Movie for you" items={movieForYou} row="0"></ListSliderMovies>
    <ListSliderMovies  title="Best Action Movies" items={actionMovies}row="1"></ListSliderMovies>
    <ListSliderTvshows title="Tv Show For You" items={tvForYou} row="2"></ListSliderTvshows>

    
  </> );
}
 
export default Home;