import React, { useState, useEffect } from 'react';
import '../../css/ListSliderMovies.scss';
import Axios from 'axios';
import ApiDb from '../../Api/ApiDb';
import { useHistory } from 'react-router-dom';

const ListSliderMovies = ({items, title, row}) => {

  const history = useHistory();

  // Clone of my items list
  const list = [...items]

  // Const
  const itemsViewPrimaryList = 8;
  const itemsHide = 6;
  const listLength = list.length;
  const listPage = Math.ceil(listLength / 6);
  const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  
  // State - List
  const [primaryList, setPrimaryList] = useState([])
  const [secondList, setSecondList] = useState([])
  const [thirdlist, setThirdlist] = useState([])

  // State - Hide / Show => Nav left
  const [handlePrev, setHandlePrev] = useState(false);

  // State - Style 
  const [styleContent, setStyleContent] = useState();

  //State - Pagination Indicator
  const [paginationRow, setPaginationRow] = useState(0);

  // State - Key to slice from $list
  const [primaryKey, setPrimaryKey] = useState({
    0: 0,
    1: 7
  });
  const [secondKey, setSecondKey] = useState({
    0: 7,
    1: 13
  });
  const [thirdKey, setThirdKey] = useState({
    0: 0,
    1: 0
  });

  // State - VideoId / Target
  const [videoId, setVideoId] = useState("");
  const [target, setTarget] = useState(false);

  const fetchList = () => {
    if(handlePrev === false){

      setPrimaryList(list.slice(primaryKey[0], primaryKey[1]));
      setSecondList(list.slice(secondKey[0], secondKey[1]));
    }
  }

  const getVideo = async (id) => {
    try{
      const data = await Axios
        .get(ApiDb.getVideoMovie(id));
        setVideoId(data.data.results[0].key);
    }catch (error) {
      console.log(error);
    }
  }

  const handleLeft = () => {
    // Pagingation Indicator
    const pagination = document.getElementsByClassName('pagination-indicator');
    console.log(pagination);
    const paginationChild = pagination[0].children;

    if(paginationRow > 0){
      for (let x = 0; x < paginationChild.length; x++) {
        paginationChild[x].classList.remove('active');
      }
      const newPaginationRow = paginationRow - 1;
      setPaginationRow(newPaginationRow);
      paginationChild[newPaginationRow].classList.add('active');

    }else{
      for (let x = 0; x < paginationChild.length; x++) {
        paginationChild[x].classList.remove('active');
      }
      const newPaginationRow = 3;
      setPaginationRow(newPaginationRow);
      paginationChild[newPaginationRow].classList.add('active');
    }

    setStyleContent({transform: 'translate3d(-16.6666667%, 0px, 0px)', transitionDuration: '1s'});

    // Primary List
    const tempPrimKey1 = primaryKey[0] + 2;
    const tempPrimKey0 = tempPrimKey1 - itemsViewPrimaryList;
    setPrimaryKey({0: tempPrimKey0, 1:tempPrimKey1});

    // Second List
    const tempSecKey1 = tempPrimKey1;   
    const tempSecKey0 = tempPrimKey1 + itemsHide;
    setSecondKey({0: tempSecKey1, 1:tempSecKey0});

    // Third List
    const tempthirdKey0 = tempPrimKey0 - itemsHide;
    const tempthirdKey1 = tempPrimKey0;
    setThirdKey({0: tempthirdKey0, 1:tempthirdKey1});

    setTimeout(() => {
      
      // Primary List
      if(tempPrimKey0 < 0)
      {
        const newkey = listLength + tempPrimKey0;
        const newArray = list.slice(newkey, listLength);
        const tempArray = newArray.concat(list.slice(0, tempPrimKey1));

        setPrimaryKey({0: newkey, 1:tempPrimKey1});
        setPrimaryList(tempArray);
      }
      else if(tempPrimKey1 > listLength)
      {
        const newkey = tempPrimKey1 - listLength;
        const newArray = list.slice(tempPrimKey0, listLength);
        const tempArray = newArray.concat(list.slice(0, newkey));

        setPrimaryKey({0: tempPrimKey0, 1:newkey});
        setPrimaryList(tempArray);
      }
      else
      {
        setPrimaryList(list.slice(tempPrimKey0, tempPrimKey1));
      }

      // Second List
      if(tempSecKey0 > listLength && tempSecKey1 > listLength)
      {
        const newkey = tempSecKey0 - listLength;
        const newkey2 = tempSecKey1 - listLength;

        setSecondKey({0: newkey, 1:newkey2});
        setSecondList(list.slice(newkey2, newkey));
      }
      else if((tempSecKey0 > listLength && tempSecKey1 < listLength))
      {
        const newkey = tempSecKey0 - listLength;
        const newArray = list.slice(tempSecKey1, listLength);
        const tempArray = newArray.concat(list.slice(0, newkey));
        setSecondKey({0: newkey, 1:tempSecKey1});
        setSecondList(tempArray);
      }
      else
      {
        setSecondList(list.slice(tempSecKey1, tempSecKey0));
      }

      //Third List
      if(tempthirdKey0 < 0 && tempthirdKey1 < 0)
      {
        const newkey = listLength + tempthirdKey0;
        const newkey2 = listLength + tempthirdKey1;

        setThirdKey({0: newkey, 1:newkey2});
        setThirdlist(list.slice(newkey, newkey2));
      }
      else if(tempthirdKey0 < 0 && tempthirdKey1 > 0)
      {
        const newkey = listLength + tempthirdKey0;
        const newArray = list.slice(newkey, listLength);
        const tempArray = newArray.concat(list.slice(0, tempthirdKey1));

        setThirdKey({0: newkey, 1:tempthirdKey1});
        setThirdlist(tempArray);
      }
      else
      {
        setThirdlist(list.slice(tempthirdKey0, tempthirdKey1));
      }
      setStyleContent({transform: 'translate3d(-116.6666667%, 0px, 0px)'});
    }, 1000);
  }

  const handleRight = (row) => {
    if(handlePrev){
      setStyleContent({transform: 'translate3d(-216.6666667%, 0px, 0px)', transitionDuration: '1s'});
    }else{
      setHandlePrev(true);
      setStyleContent({transform: 'translate3d(-100%, 0px, 0px)', transitionDuration: '1s'});
    }
  
    // Pagingation Indicator
    const pagination = document.getElementsByClassName('pagination-indicator');
    const paginationChild = pagination[row].children;

    if(paginationRow < listPage - 1){
      for (let x = 0; x < paginationChild.length; x++) {
        paginationChild[x].classList.remove('active');
      }
      const newPaginationRow = paginationRow + 1;
      setPaginationRow(newPaginationRow);
      paginationChild[newPaginationRow].classList.add('active');

    }else{
      for (let x = 0; x < paginationChild.length; x++) {
        paginationChild[x].classList.remove('active');
      }
      const newPaginationRow = 0;
      setPaginationRow(newPaginationRow);
      paginationChild[newPaginationRow].classList.add('active');
    }
    
    // Primary List
    const tempPrimKey0 = primaryKey[1] - 2;
    const tempPrimKey1 = tempPrimKey0 + itemsViewPrimaryList;
    setPrimaryKey({0: tempPrimKey0, 1:tempPrimKey1});

    // Second List
    const tempSecKey0 = tempPrimKey1;
    const tempSecKey1 = tempPrimKey1 + itemsHide;   
    setSecondKey({0: tempSecKey0, 1:tempSecKey1});

    // Third List
    const tempthirdKey0 = tempPrimKey0 - itemsHide;
    const tempthirdKey1 = tempPrimKey0;   
    setThirdKey({0: tempthirdKey0, 1:tempthirdKey1});

    setTimeout(() => {
      
      // Primary List
      if(tempPrimKey1 > listLength)
      {
        
        const newkey = tempPrimKey1 - listLength;
        const newArray = list.slice(tempPrimKey0, listLength);
        const tempArray = newArray.concat(list.slice(0, newkey));

        setPrimaryKey({0: tempPrimKey0, 1:newkey});
        setPrimaryList(tempArray);
      }
      else if(tempPrimKey0 < 0)
      {
        const newkey = listLength + tempPrimKey0;
        const newArray = list.slice(newkey, listLength);
        const tempArray = newArray.concat(list.slice(0, tempPrimKey1));

        setPrimaryKey({0: newkey, 1:tempPrimKey1});
        setPrimaryList(tempArray);
      }
      else
      {
        setPrimaryList(list.slice(tempPrimKey0, tempPrimKey1));
      }
      
      // Second List
      if(tempSecKey1 > listLength && tempSecKey0 < listLength)
      {
        const newkey = tempSecKey1 - listLength;
        const newArray = list.slice(tempSecKey0, listLength);
        const tempArray = newArray.concat(list.slice(0, newkey));

        setSecondKey({0: tempSecKey0, 1:newkey});
        setSecondList(tempArray);
      }
      else if(tempSecKey0 > listLength && tempSecKey1 > listLength)
      { 
        const newkey = tempSecKey0 - listLength;
        const newkey2 = tempSecKey1 - listLength;

        setSecondKey({0: newkey, 1:newkey2});
        setSecondList(list.slice(newkey, newkey2));
      }
      else
      {
        setSecondList(list.slice(tempSecKey0, tempSecKey1));
      }

      // Third List
      if(tempthirdKey0 < 0 && tempthirdKey1 > 0){
        const newkey = listLength + tempthirdKey0;
        const newArray = list.slice(newkey, listLength);
        const tempArray = newArray.concat(list.slice(0, tempthirdKey1));

        setThirdKey({0: newkey, 1:tempthirdKey1});
        setThirdlist(tempArray);
      }
      else if(tempthirdKey0 < 0 && tempthirdKey1 < 0)
      {
        const newkey = listLength + tempthirdKey0;
        const newkey2 = listLength + tempthirdKey1;

        setThirdKey({0: newkey, 1:newkey2});
        setThirdlist(list.slice(newkey, newkey2));
      }
      else
      {
        setThirdlist(list.slice(tempthirdKey0, tempthirdKey1));
      }
      setStyleContent({transform: 'translate3d(-116.6666667%, 0px, 0px)'});
    }, 1000);
  }
 
  const handleOver = (index, event, title, id) => {
    

    const rowEvent = document.querySelector('#row-slider-content-'+row);
    
    getVideo(id);
    setTarget(event.currentTarget);

    if(handlePrev){
      if(index === 1){
        event.currentTarget.classList.remove('items-item');
        event.currentTarget.style.transform= "translate3d(50px, 0px, 0px)";
        const arrayClass = rowEvent.getElementsByClassName('items-item');
        for (let i = 0; i < arrayClass.length; i++) {
          if(i < index){
            arrayClass[i].style.transform= "translate3d(0px, 0px, 0px)";
          }else{
            arrayClass[i].style.transform= "translate3d(100px, 0px, 0px)";
          }
        }
      }else if(index < 6){
        event.currentTarget.classList.remove('items-item');
        const arrayClass = rowEvent.getElementsByClassName('items-item');
        for (let i = 0; i < arrayClass.length; i++) {
          if(i < index){
            arrayClass[i].style.transform= "translate3d(-50px, 0px, 0px)";
          }else{
            arrayClass[i].style.transform= "translate3d(50px, 0px, 0px)";
          }
        }
      }else{
        event.currentTarget.classList.remove('items-item');
        event.currentTarget.style.transform= "translate3d(-50px, 0px, 0px)";
        const arrayClass = rowEvent.getElementsByClassName('items-item');
        for (let i = 0; i < arrayClass.length; i++) {
          if(i < index){
            arrayClass[i].style.transform= "translate3d(-100px, 0px, 0px)";
          }else{
            arrayClass[i].style.transform= "translate3d(0px, 0px, 0px)";
          }
        }
      }
      
    }else{
      if(index === 0){
        event.currentTarget.style.transform= "translate3d(50px, 0px, 0px)";
        event.currentTarget.classList.remove('items-item');
        const arrayClass = rowEvent.getElementsByClassName('items-item');
        for (let i = 0; i < arrayClass.length; i++) {
          arrayClass[i].style.transform= "translate3d(100px, 0px, 0px)";
        }
      }else if(index < 5){
        event.currentTarget.classList.remove('items-item');
        const arrayClass = rowEvent.getElementsByClassName('items-item');
        for (let i = 0; i < arrayClass.length; i++) {
          if(i < index){
            arrayClass[i].style.transform= "translate3d(-50px, 0px, 0px)";
          }else{
            arrayClass[i].style.transform= "translate3d(50px, 0px, 0px)";
          }
        }
      }else if(index === 5){
        event.currentTarget.classList.remove('items-item');
        event.currentTarget.style.transform= "translate3d(-50px, 0px, 0px)";
        const arrayClass = rowEvent.getElementsByClassName('items-item');
        for (let i = 0; i < arrayClass.length; i++) {
          if(i < index){
            arrayClass[i].style.transform= "translate3d(-100px, 0px, 0px)";
          }else{
            arrayClass[i].style.transform= "translate3d(0px, 0px, 0px)";
          }
        }
      }
    }
    
  }
  
  const handleOut = (event) => {

    event.currentTarget.classList.add('items-item');
    const arrayClass = document.getElementsByClassName('items-item');
    for (let index = 0; index < arrayClass.length; index++) {
      arrayClass[index].style.transform= "translate3d(0px, 0px, 0px)";
    }

    setVideoId('');
    setTarget(false);
    //event.currentTarget.querySelector("span").innerHTML= '';
  }

  const pushVideo = target => {
    if (target && videoId) {
      target.querySelector("span .bob-card .bob-card-video").innerHTML= '<iframe width="400" height="400" src="https://www.youtube.com/embed/'+videoId+'?autoplay=1&mute=1&controls=0&showinfo=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
    }
  };

  const paginationIndicator = () => {
    let list = [];

    for (let z = 0; z < listPage; z++) {
      if(z === 0){
        list.push(<li key={"paginationIndicator-"+z} className="active"></li>)
      }else{
        list.push(<li key={"paginationIndicator-"+z}></li>)
      }
    }

    return list;
  }

  const handleClick = (id) => {
    history.replace("/movies/" + id);
  }

  useEffect(() => {
    fetchList();
    pushVideo(target);
  }, [items, target, videoId]);

  return ( <>

  <div className="container-title">
    <div className="header-part">
      <h3>{title}</h3>
    </div>
  </div>

  <div className="rowContainer rowContainer_title_card" id={"row-" + row}>
    <div className="ptrack-container">
      <div className="rowContent slider-hover-trigger-layer" >
        <div className="slider">
          {
            handlePrev ?  <span className="handle handlePrev active" onClick={()=>handleLeft(row)} role="button" aria-label="Voir les titres précédents">
            <ion-icon name="chevron-back"></ion-icon>
          </span> : <></>
          }
         
          <ul className="pagination-indicator">

            {paginationIndicator()}

          </ul>
          
          <div className="sliderMask showPeek">
            <div id={"row-slider-content-"+row} className="sliderContent row-with-x-columns" style={styleContent}>
             
              {
                thirdlist.map((item, index) =>
                  <div className={"slider-item "} key={item.id}>
                    <div className="title-card-container">
                      <div id="" className="slider-refocus title-card">
                        <div className="ptrack-content">
                          <a className="slider-refocus">
                            <div className="boxart-size-16x9 boxart-container">
                            {
                              (item.backdrop_path === null) ?
                              <><img className="boxart-image boxart-image-in-padded-container" src={"https://image.tmdb.org/t/p/w400/"+ item.poster_path} alt=""/></> : <><img className="boxart-image boxart-image-in-padded-container" src={"https://image.tmdb.org/t/p/w400/"+ item.backdrop_path} alt=""/></>
                            }
                              <div className="fallback-text-container" aria-hidden="true">
                                <p className="fallback-text">{item.title}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="bob-container">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                primaryList.map((item, index) =>
                  <div className={"slider-item items-item slider-item-"+ index} onMouseEnter={(event) => handleOver(index, event, item.title, item.id)}  onMouseLeave={handleOut}  key={item.id}>
                    <div className="title-card-container">
                      <div id="" className="slider-refocus title-card">
                        <div className="ptrack-content">
                          <a className="slider-refocus">
                            <div className="boxart-size-16x9 boxart-container">
                              {
                                (item.backdrop_path === null) ?
                                <><img className="boxart-image boxart-image-in-padded-container" src={"https://image.tmdb.org/t/p/w400/"+ item.poster_path} alt=""/></> : <><img className="boxart-image boxart-image-in-padded-container" src={"https://image.tmdb.org/t/p/w400/"+ item.backdrop_path} alt=""/></>
                              }
                            
                              <div className="fallback-text-container" aria-hidden="true">
                                <p className="fallback-text">{item.title}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="bob-container">
                          <span>
                            <div onClick={() => handleClick(item.id)} className="bob-card">
                              <div className="bob-card-infos-top">
                                <p>{item.title}</p>
                              </div>
                              <div className="bob-card-infos-middle">
                                <p> {(item.adult)? <span>14+</span>  : <span>7+</span> } <span className="note">IMDB <span>{item.vote_average}</span></span></p>
                              </div>
                              <div className="bob-card-infos-ratio">
                                <div className="ratio-circle">{item.vote_average * 10}%</div>
                              </div>
                              <div className="bob-card-infos-bottom">
                                <div>
                                  <p>{new Date(item.release_date).getFullYear()} - {(item.adult)? <span>14+</span>  : <span>7+</span> }</p>
                                  <p className="genres">
                                    
                                  </p>
                                </div>
                                <div>
                                  <ion-icon name="heart-sharp" /> <ion-icon name="information-circle-outline"></ion-icon>
                                </div>
                              </div>

                              <div className="bob-card-img-content">
                                {
                                  (item.backdrop_path === null) ?
                                  <><img className="" src={"https://image.tmdb.org/t/p/w400/"+ item.poster_path} alt=""/></> : <><img className="" src={"https://image.tmdb.org/t/p/w400/"+ item.backdrop_path} alt=""/></>
                                }
                              </div>
                              <div className="bob-card-video">

                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                secondList.map((item, index) =>
                  <div className={"slider-item "} key={item.id}>
                    <div className="title-card-container">
                      <div id="" className="slider-refocus title-card">
                        <div className="ptrack-content">
                          <a className="slider-refocus">
                            <div className="boxart-size-16x9 boxart-container">
                            {
                              (item.backdrop_path === null) ?
                              <><img className="boxart-image boxart-image-in-padded-container" src={"https://image.tmdb.org/t/p/w400/"+ item.poster_path} alt=""/></> : <><img className="boxart-image boxart-image-in-padded-container" src={"https://image.tmdb.org/t/p/w400/"+ item.backdrop_path} alt=""/></>
                            }
                            
                              <div className="fallback-text-container" aria-hidden="true">
                                <p className="fallback-text">{item.title}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="bob-container">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              
            </div>
          </div>
          <span className="handle handleNext active" onClick={()=>handleRight(row)} role="button" aria-label="Voir plus de titres">
            <ion-icon name="chevron-forward"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  </div>

    
    
  </> );
}
 
export default ListSliderMovies;