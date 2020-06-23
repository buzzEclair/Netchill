import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ApiDb from '../Api/ApiDb';
import { Link, useHistory } from 'react-router-dom';
import '../css/Movie.scss';
import ListSliderMovies from '../components/List/ListSliderMovies';
import Torrent from '../components/Torrent';

const Movie = (props) => {

  const history = useHistory();
  const id = props.match.params.id;
  const [movieId, setMovieId] = useState({
    "adult": false,
    "backdrop_path": "",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
      {
        "id": 0,
        "name": ""
      },
    ],
    "homepage": "",
    "id": 0,
    "imdb_id": "",
    "original_language": "",
    "original_title": "",
    "overview": "",
    "popularity":0,
    "poster_path": "",
    "production_companies": [
      {
        "id": 0,
        "logo_path": null,
        "name": "",
        "origin_country": ""
      },
    ],
    "production_countries": [
      {
        "iso_3166_1": "",
        "name": ""
      }
    ],
    "release_date": "",
    "revenue": 0,
    "runtime": 0,
    "spoken_languages": [
      {
        "iso_639_1": "",
        "name": ""
      }
    ],
    "status": "",
    "tagline": "n",
    "title": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  });
  const [castDetails, setCastDetails] = useState({
    "id": 475303,
    "cast": [
      {
        "cast_id": 5,
        "character": "Gatsby Welles",
        "credit_id": "59b72d61c3a368156c003b64",
        "gender": 2,
        "id": 1190668,
        "name": "Timothée Chalamet",
        "order": 0,
        "profile_path": "/taemN1znIWgkahgu80gG1DLv5gC.jpg"
      }
    ],
    "crew": [
      {
        "credit_id": "59b72d1392514167bc003766",
        "department": "Camera",
        "gender": 2,
        "id": 7202,
        "job": "Director of Photography",
        "name": "Vittorio Storaro",
        "profile_path": "/k3TuzvijQo7knoRHyEiLqbgWBdO.jpg"
      }
    ]
  });
  const [similarMovies, setSimilarMovies] = useState([]);  

  const [styleInfo, setStyleInfo] = useState({left: -650+'px'});
  const [styleSimilar, setStyleSimilar] = useState({bottom: -400+'px'});

  const findOne = async id => {
    try{
      const data = await Axios
        .get(ApiDb.findOne(id));
      setMovieId(data.data);
      
    }catch (error) {
      console.log(error);
    }
  }

  const findCastDetails = async id => {
    try{
      const data = await Axios
        .get(ApiDb.findCastDetails(id));
      setCastDetails(data.data);
    }catch (error) {
      console.log(error);
    }
  }

  const findSimilarMovies = async id => {
    try{
      const data = await Axios
        .get(ApiDb.findSimilarMovies(id));
      setSimilarMovies(data.data.results);
      
    }catch (error) {
      console.log(error);
    }
  }

  const handleInfo = () => {
    if(styleInfo.left === -650+'px'){

      setStyleSimilar({bottom: -400+'px'});
      setStyleInfo({left: 0+'px'});
    }else{
      setStyleSimilar({bottom: -400+'px'});
      setStyleInfo({left: -650+'px'});

    }
  }

  const handleSimilar = () => {
    if(styleSimilar.bottom === -400+'px'){

      setStyleSimilar({bottom: 0+'px'});
      setStyleInfo({left: -650+'px'});
    }else{
      setStyleSimilar({bottom: -400+'px'});
      setStyleInfo({left: -650+'px'});

    }
  }

  history.listen((location, action) => {
    if(action === 'REPLACE'){
      setStyleSimilar({bottom: -400+'px'})
    }
  })

  useEffect(() => { findOne(id); findCastDetails(id); findSimilarMovies(id); }, [id]);

  return ( <>
  <div className="movie">
    <div className="similar-movies" style={styleSimilar}>
      <div className="btn-similar-items" onClick={handleSimilar} >
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <ListSliderMovies  title="Similar Movies" items={similarMovies} row="0"></ListSliderMovies>
    </div>
    <div className="movie-bg-content">
      
      <span className="title-stroke">{movieId.title.substring(0, 20)}</span>
      
      <div className="movie-bg-content-info">
        <div className="promote-tag">
          <div>Add recently</div>
          <div>Popular with friends</div>
        </div>
        <h3>{movieId.title}</h3>
        <div className="last-info">
          <div className="imdb">IMDB <span>{movieId.vote_average}</span></div>
          <div className="age">16 +</div>
          <div className="year">{movieId.release_date}</div>
          <div className="cats">
            {
              movieId.genres.map(genre => <span key={genre.id}>{genre.name}</span>)
            }
          </div>
        </div>
        <div className="content-movie-btn">
          <Torrent></Torrent>
          <div className="movie-btn">add to watchlist</div>
        </div>
      </div>
      
     
      <div className="infos-movie" style={styleInfo}>
        <h3>{movieId.title}</h3>
        <p className="info-movie-synopsis">{movieId.overview}</p>
        <div className="info-movie-dc">
          <div className="info-movie-details">
            <h4>Details</h4>
            {castDetails.crew.slice(0,6).map(crew =>
              <div key={crew.credit_id}>
                <p>{crew.job}</p><p>{crew.name}</p>
              </div>
            )}
          </div>
          <div className="info-movie-cast">
            <h4>Main Cast</h4>
            {castDetails.cast.slice(0,6).map(details =>
              <div key={details.credit_id}>
                <p>{details.character}</p><p>{details.name}</p>
              </div>
            )}
          </div>
        </div>
        <div className="infos-btn" onClick={handleInfo}>
          <ion-icon name="information-outline"></ion-icon>
        </div>
      </div>
      <img src={"https://image.tmdb.org/t/p/original/" + movieId.backdrop_path} alt=""/>
    </div>

    
  </div>
  </> );
}
 
export default Movie;