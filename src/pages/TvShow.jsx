import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiDb from '../Api/ApiDb';
import Axios from 'axios';
import '../css/Tvshow.scss';
import ListSliderMovies from '../components/List/ListSliderMovies';

const TvShow = (props) => {

  const id = props.match.params.id;

  const [tvShow, setTvShow] = useState({
    "backdrop_path": "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
    "created_by": [
      {
        "id": 9813,
        "credit_id": "5256c8c219c2956ff604858a",
        "name": "David Benioff",
        "gender": 2,
        "profile_path": "/8CuuNIKMzMUL1NKOPv9AqEwM7og.jpg"
      },
      {
        "id": 228068,
        "credit_id": "552e611e9251413fea000901",
        "name": "D. B. Weiss",
        "gender": 2,
        "profile_path": "/caUAtilEe06OwOjoQY3B7BgpARi.jpg"
      }
    ],
    "episode_run_time": [
      60
    ],
    "first_air_date": "2011-04-17",
    "genres": [
      {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10759,
        "name": "Action & Adventure"
      }
    ],
    "homepage": "http://www.hbo.com/game-of-thrones",
    "id": 1399,
    "in_production": true,
    "languages": [
      "es",
      "en",
      "de"
    ],
    "last_air_date": "2017-08-27",
    "last_episode_to_air": {
      "air_date": "2017-08-27",
      "episode_number": 7,
      "id": 1340528,
      "name": "The Dragon and the Wolf",
      "overview": "A meeting is held in King's Landing. Problems arise in the North.",
      "production_code": "707",
      "season_number": 7,
      "show_id": 1399,
      "still_path": "/jLe9VcbGRDUJeuM8IwB7VX4GDRg.jpg",
      "vote_average": 9.145,
      "vote_count": 31
    },
    "name": "Game of Thrones",
    "next_episode_to_air": null,
    "networks": [
      {
        "name": "HBO",
        "id": 49,
        "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
        "origin_country": "US"
      }
    ],
    "number_of_episodes": 67,
    "number_of_seasons": 7,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Game of Thrones",
    "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    "popularity": 53.516,
    "poster_path": "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
    "production_companies": [
      {
        "id": 76043,
        "logo_path": "/9RO2vbQ67otPrBLXCaC8UMp3Qat.png",
        "name": "Revolution Sun Studios",
        "origin_country": "US"
      },
      {
        "id": 3268,
        "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
        "name": "HBO",
        "origin_country": "US"
      },
      {
        "id": 12525,
        "logo_path": null,
        "name": "Television 360",
        "origin_country": ""
      },
      {
        "id": 5820,
        "logo_path": null,
        "name": "Generator Entertainment",
        "origin_country": ""
      },
      {
        "id": 12526,
        "logo_path": null,
        "name": "Bighead Littlehead",
        "origin_country": ""
      }
    ],
    "seasons": [
      {
        "air_date": "2010-12-05",
        "episode_count": 14,
        "id": 3627,
        "name": "Specials",
        "overview": "",
        "poster_path": "/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
        "season_number": 0
      },
      {
        "air_date": "2011-04-17",
        "episode_count": 10,
        "id": 3624,
        "name": "Season 1",
        "overview": "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, an ancient evil has returned. In Season One, the story centers on three primary areas: the Stark and the Lannister families, whose designs on controlling the throne threaten a tenuous peace; the dragon princess Daenerys, heir to the former dynasty, who waits just over the Narrow Sea with her malevolent brother Viserys; and the Great Wall--a massive barrier of ice where a forgotten danger is stirring.",
        "poster_path": "/zwaj4egrhnXOBIit1tyb4Sbt3KP.jpg",
        "season_number": 1
      },
      {
        "air_date": "2012-04-01",
        "episode_count": 10,
        "id": 3625,
        "name": "Season 2",
        "overview": "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. With winter fast approaching, the coveted Iron Throne is occupied by the cruel Joffrey, counseled by his conniving mother Cersei and uncle Tyrion. But the Lannister hold on the Throne is under assault on many fronts. Meanwhile, a new leader is rising among the wildings outside the Great Wall, adding new perils for Jon Snow and the order of the Night's Watch.",
        "poster_path": "/5tuhCkqPOT20XPwwi9NhFnC1g9R.jpg",
        "season_number": 2
      },
      {
        "air_date": "2013-03-31",
        "episode_count": 10,
        "id": 3626,
        "name": "Season 3",
        "overview": "Duplicity and treachery...nobility and honor...conquest and triumph...and, of course, dragons. In Season 3, family and loyalty are the overarching themes as many critical storylines from the first two seasons come to a brutal head. Meanwhile, the Lannisters maintain their hold on King's Landing, though stirrings in the North threaten to alter the balance of power; Robb Stark, King of the North, faces a major calamity as he tries to build on his victories; a massive army of wildlings led by Mance Rayder march for the Wall; and Daenerys Targaryen--reunited with her dragons--attempts to raise an army in her quest for the Iron Throne.",
        "poster_path": "/qYxRy8ZYCo2yTz7HsO6J1HWtPsY.jpg",
        "season_number": 3
      },
      {
        "air_date": "2014-04-06",
        "episode_count": 10,
        "id": 3628,
        "name": "Season 4",
        "overview": "The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.",
        "poster_path": "/dniQ7zw3mbLJkd1U0gdFEh4b24O.jpg",
        "season_number": 4
      },
      {
        "air_date": "2015-04-12",
        "episode_count": 10,
        "id": 62090,
        "name": "Season 5",
        "overview": "The War of the Five Kings, once thought to be drawing to a close, is instead entering a new and more chaotic phase. Westeros is on the brink of collapse, and many are seizing what they can while the realm implodes, like a corpse making a feast for crows.",
        "poster_path": "/527sR9hNDcgVDKNUE3QYra95vP5.jpg",
        "season_number": 5
      },
      {
        "air_date": "2016-04-24",
        "episode_count": 10,
        "id": 71881,
        "name": "Season 6",
        "overview": "Following the shocking developments at the conclusion of season five, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Familiar faces will forge new alliances to bolster their strategic chances at survival, while new characters will emerge to challenge the balance of power in the east, west, north and south.",
        "poster_path": "/zvYrzLMfPIenxoq2jFY4eExbRv8.jpg",
        "season_number": 6
      },
      {
        "air_date": "2017-07-16",
        "episode_count": 7,
        "id": 81266,
        "name": "Season 7",
        "overview": "The long winter is here. And with it comes a convergence of armies and attitudes that have been brewing for years.",
        "poster_path": "/3dqzU3F3dZpAripEx9kRnijXbOj.jpg",
        "season_number": 7
      }
    ],
    "status": "Returning Series",
    "type": "Scripted",
    "vote_average": 8.2,
    "vote_count": 4682
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

  const [episodes, setEpisodes] = useState([0]);
  const [styleEpisode, setStyleEpisode] = useState({});
  const [indexEpisode, setIndexEpisode] = useState(1);
  const [transformWidth, setTransformWidth] = useState(0);
  const [currentSeason, setCurrentSeason] = useState(1);

  const [season, setSeason] = useState([]);

  const findSimilarTvs = async id => {
    try{
      const data = await Axios
        .get(ApiDb.findSimilarMovies(id));
      setSimilarMovies(data.data.results);
      
    }catch (error) {
      console.log(error);
    }
  }

  const findOne = async id => {
    const array = [];
    try{
      const data = await Axios
        .get(ApiDb.findOneTv(id));
      setTvShow(data.data);
     
      for (let a = 0; a < data.data.seasons.length; a++) {
        if(data.data.seasons[a].name !== "Specials"){
          array.push(data.data.seasons[a]);
        }
      }
      setSeason(array);
    }catch (error) {
      console.log(error);
    }

    document.querySelector('.item:first-child').classList.add('active');

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

  const handleSeason = async (event, season_number) => {
    const listItem = document.querySelectorAll('.item');
    listItem.forEach(element => {
      element.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    console.log(id, season_number);
    try{
      const data = await Axios
      .get(ApiDb.findEpisode(id, season_number));
      setEpisodes(data.data.episodes);
      
    }catch (error) {
      console.log(error);
    }
  }

  const fetchListEpisode = async id => {
    try{
      const data = await Axios
      .get(ApiDb.findEpisode(id, currentSeason));
      setEpisodes(data.data.episodes);
    }catch (error) {
      console.log(error);
    }
    document.querySelector('.list-items .item').classList.add('item-active');
  }

  const handleEpisodeLeft = () => {
   
    if(indexEpisode === 2){
      setStyleEpisode({transform : 'translate3d('+(0)+'px, 0px, 0px)'});
      setIndexEpisode(1);
      setTransformWidth(0);
      document.querySelectorAll('.list-items .item')[indexEpisode - 2].classList.add('item-active');
      document.querySelectorAll('.list-items .item')[indexEpisode -1].classList.remove('item-active');
    }else if(indexEpisode === 1){
    }else{
      setStyleEpisode({transform : 'translate3d('+(transformWidth+290)+'px, 0px, 0px)'});
      document.querySelectorAll('.list-items .item')[indexEpisode - 2].classList.add('item-active');
      document.querySelectorAll('.list-items .item')[indexEpisode -1].classList.remove('item-active');
      setIndexEpisode(indexEpisode - 1);
      setTransformWidth(transformWidth+290);
    }
    
  }

  const handleEpisodeRight = () => {
    
    if(document.querySelectorAll('.list-items .item')[indexEpisode] === undefined){

    }else{
      setStyleEpisode({transform : 'translate3d('+(transformWidth-290)+'px, 0px, 0px)'})
      document.querySelectorAll('.list-items .item')[indexEpisode].classList.add('item-active');
      document.querySelectorAll('.list-items .item')[indexEpisode - 1].classList.remove('item-active');
      setTransformWidth(transformWidth-290);
      setIndexEpisode(indexEpisode + 1);
    }
  }

  const watchList = (id, name) => {
    document.querySelector('.watchList-add').innerHTML = "<span>"+name+"</span>";
    setTimeout(() => {
      document.querySelector('.watchList-add').innerHTML = "";
    }, 980);

  }

  useEffect(() => { 
    findOne(id); 
    findCastDetails(id); 
    findSimilarTvs(id); 
    fetchListEpisode(id); 
  }, [id]);


  return ( <>
    <div className="">
      <div className="movie-bg-content">
        <span className="title-stroke">{tvShow.name.substring(0, 20)}</span>
        
        
        <div className="movie-bg-content-info">
          <div className="promote-tag">
            <div>Add recently</div>
            <div>Popular with friends</div>
          </div>
          <h3>{tvShow.name}</h3>
          <div className="last-info">
            <div className="imdb">IMDB <span>{tvShow.vote_average}</span></div>
            <div className="age">16 +</div>
            <div className="year">{tvShow.release_date}</div>
            <div className="cats">
              {
                tvShow.genres.map(genre => <span key={genre.id}>{genre.name}</span>)
              }
            </div>
          </div>
          <div className="content-movie-btn">
            <div className="movie-btn movie-btn-white">watch</div>
            <div className="movie-btn" onClick={() => watchList(id, tvShow.name)} >add to watchlist</div>
          </div>
        </div>
        
        <div className="similar-items" style={styleSimilar}>
          <div className="btn-similar-items" onClick={handleSimilar} >
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <ListSliderMovies  title="Similar Movies" items={similarMovies} row="0"></ListSliderMovies>
        </div>
        <div className="infos-movie" style={styleInfo}>
          <h3>{tvShow.name}</h3>
          <p className="info-movie-synopsis">{tvShow.overview}</p>
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
        
        <div className="list-season">
          {
            season.slice(0,8).map(season => 
              <div className="item" onClick={(event) => handleSeason(event, season.season_number)} key={season.season_number}>
                <div>{season.name}</div>
                  
              </div>
            )
          }
        </div>
        
        <div className="list-episode">
          <div className="list-items" style={styleEpisode}>
            {
              episodes.map((episode, index) =>
                <div key={index} className="item">
                  <div className="info-episode">
                    <p className="episode-shadow">Episode {episode.episode_number}</p>
                    <p className="episode-shadow">{episode.name}</p>
                    <p>IMDB <span>{(isNaN(Math.round(episode.vote_average))?0 : Math.round(episode.vote_average))}</span> </p>
                  </div>
                  <img src={"https://image.tmdb.org/t/p/w300/" + episode.still_path} alt=""/>
                </div>
              )
            }
          </div>
          <div className="nav-episode">
            <div onClick={handleEpisodeLeft} className="nav-btn nav-btn-left">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div onClick={handleEpisodeRight} className="nav-btn nav-btn-right">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
          <div className="episode-view">
            <p className="episode-selected">
              {
                (indexEpisode < 10) ? <span>0{indexEpisode}</span> : <span>{indexEpisode}</span> 
              }
            </p>
            <div className="separator"></div>
            <p className="season-length">{episodes.length}</p>
          </div>
        </div>
        
        
        <img src={"https://image.tmdb.org/t/p/original/" + tvShow.backdrop_path} alt=""/>
      </div>

    </div>
  </> );
}
 
export default TvShow;