import React from 'react';
import '../css/Nav.scss';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import { useState } from 'react';
import { useEffect } from 'react';
import Notification from './Notification';


const Navbar = (props) => {

  const random = Math.floor(Math.random() * 1000000);
  const [profilBg, setProfilBg] = useState({});
  const name = ['Francis', 'Panf', 'Paul'];
  const colors = [{
  backgroundColor:'rgb(226, 174, 174)'},
  {backgroundColor:'rgb(189, 226, 174)'},
  {backgroundColor:'rgb(174, 214, 226)'},
  {backgroundColor:'rgb(183, 174, 226)'},
  {backgroundColor:'rgb(226, 174, 222)'},
  {backgroundColor:'rgb(222, 226, 174)'}];

  const handleColor = () => {
    const color = colors[Math.floor(Math.random() * 6)];
    setProfilBg(color);
  }

  useEffect(()=>{
    handleColor();
  }, [props]);

  return ( <>

    <div className="container-nav">
      <div className="container-nav-center">
        <nav className="nav-desktop">
          <div className="nav-left">
            <NavLink to="/" ><img className="logo" src={process.env.PUBLIC_URL + '/img/netchill.png'} alt="netflix-font" border="0" /></NavLink>

          </div>
          <div className="nav-right">
            <SearchInput></SearchInput>
            <NavLink to="/watchList" ><ion-icon name="heart-sharp"></ion-icon><span>Watchlist</span> <div className="watchList-add"></div>
            </NavLink>
            <Notification></Notification>
            <div className="nav-profil">
              <img src={"http://gravatar.com/avatar/"+random+"?d=robohash&f=y"} alt="" style={profilBg} />
              <span>{name[Math.floor(Math.random() * 3)]}</span>
            </div>
          </div>
        </nav>
        
      </div>
    </div>
  </> );
}
 
export default Navbar;