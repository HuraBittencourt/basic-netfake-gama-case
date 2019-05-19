import './App.css';

import React, { Component } from 'react';

import Movie from './Movie';
import { getApi } from './service';
import logo from './logo.svg';

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';
const sourceImage = 'http://image.tmdb.org/t/p/w500/';
class App extends Component {
  
  state = {
    upcomings: [],
    popular: []
  }

  getUpcomingsMovies = () => {
    const apiObject = getApi('upcoming');

    apiObject.then(response => (
      this.setState({
        upcomings: response
      })
    ))
  }
  
  getPopularMovies = () => {
    const apiObject = getApi('popular');

    apiObject.then(response => (
      this.setState({
        popular: response
      })
    ))
  }

  componentDidMount() {
    this.getUpcomingsMovies();
    this.getPopularMovies();
  }

  render() {

    const { upcomings, popular } = this.state;

    return (
      <div className="App">
        <div>
          <h1>Upcomings</h1>
          <ul className="movies">
            {upcomings.map(movie => (
              <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.poster_path} />
            ))}
          </ul>
        </div>
        
        <div>
          <h1>Popular</h1>
          <ul className="movies">
            {popular.map(movie => (
              <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.poster_path} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
