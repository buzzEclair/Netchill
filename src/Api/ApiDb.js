const apiKey = 'f45276f9674579d78bb65d4511f4b411';
const http = 'https://api.themoviedb.org/3/';

const discoverMovie = ""+http+"discover/movie?api_key="+apiKey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const discoverTv = ""+http+"discover/tv?api_key="+apiKey+"&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false";

function findOne(id){
  return ""+http+"movie/"+id+"?api_key="+apiKey+"&language=en-US";
}

function findCastDetails(id){
  return ""+http+"movie/"+id+"/credits?api_key="+apiKey+"";
}

function findSimilarMovies(id){
  return ""+http+"movie/"+id+"/similar?api_key="+apiKey+"&language=en-US&page=1";
}

function findSimilarTvs(id){
  return ""+http+"tv/"+id+"/similar?api_key="+apiKey+"&language=en-US&page=1";
}

function getVideoMovie(id){
  return ""+http+"movie/"+id+"/videos?api_key="+apiKey+"&language=en-US";
}

function findOneTv(id){
  return ""+http+"tv/"+id+"?api_key="+apiKey+"&language=en-US";
}

function findEpisode(id, season){
  return ""+http+"tv/"+id+"/season/"+season+"?api_key="+apiKey+"&language=en-US";
}

function fetchMoviesByGenreYear(genre, year){
  return ""+http+"discover/movie?api_key="+apiKey+"&sort_by=popularity.desc&include_adult=false&primary_release_year="+year+"&with_genres="+genre+"";
}

function searchMulti(query, n){
  return ""+http+"search/multi?api_key="+apiKey+"&language=en-US&query="+query+"&page="+n+"&include_adult=false";
}

export default {
  discoverMovie,
  discoverTv,
  findOne,
  findCastDetails,
  findSimilarMovies,
  findSimilarTvs,
  findOneTv,
  findEpisode,
  getVideoMovie,
  fetchMoviesByGenreYear,
  searchMulti,
}