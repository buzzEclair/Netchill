import React, { Component } from 'react';
import '../css/Search.scss';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchInput = (props) => {
  let location = useLocation();

  const history = useHistory();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.currentTarget.value);
    if(event.currentTarget.value === ""){

      history.replace("/");
    }else{
      history.replace("/Search/" + event.currentTarget.value);

    }
  }

  return ( <>
    <div className="input-search">

      <input className="input-search-nav" onChange={handleChange} value={inputValue} type="text"/>
      <ion-icon name="search-sharp"></ion-icon>
    </div>
  </> );
}
 
export default SearchInput;