import './App.css';

import React, { Component } from 'react';

import Movie from './Movie';
import logo from './logo.svg';

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';
const sourceImage = 'http://image.tmdb.org/t/p/w500/';
class App extends Component {
  
  state = {
    upcomings: [],
    popular: []
  }

  getUpcomingsMovies = () => (
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ upcomings: data.results})
    })
  )
  
  getPopularMovies = (query) => (
    fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
    .then(results => {
      return results.json();
    }).then(data => {data.results})
  )

  componentDidMount() {
    this.getUpcomingsMovies();
    this.getPopularMovies();

    this.setState({
      upcomings: getApi('upcomings'),
      popular: getApi('popular')
    })
  }

  render() {

    const { upcomings, popular } = this.state;

    return (
      <div className="App">
        <div>
          <ul className="movies">
            {upcomings.map(movie => (
              <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.poster_path} />
            ))}
          </ul>
        </div>
        
        <div>
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
