import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/App.scss';
import './css/responsive.scss';
import './css/Animation.scss';
import Home from './pages/Home';
import Kids from './pages/Kids'
import Movie from './pages/Movie';
import Movies from './pages/Movies';

import Tvshows from './pages/Tvshows';
import TvShow from './pages/TvShow';
import ScrollToTop from './Services/ScrollTop';
import WatchList from './components/WatchList';
import Search from './pages/Search';


function App() {
  
  return (
    <div className="App">
      
        <Router >
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/Search/:q" component={Search}  ></Route>
            <Route path="/kids" component={Kids}  ></Route>
            <Route path="/tvshows/:id" component={TvShow}  ></Route>
            <Route path="/tvshows" component={Tvshows}  ></Route>
            <Route path="/movies/:id" component={Movie}  ></Route>
            <Route path="/movies" component={Movies}  ></Route>
            <Route path="/watchList" component={WatchList}  ></Route>
            <Route path="/" component={Home}  ></Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
