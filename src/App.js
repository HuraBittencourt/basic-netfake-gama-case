import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';
const sourceImage = 'http://image.tmdb.org/t/p/w500/';
class App extends Component {
  
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ movies: data.results})
    })
  }

  render() {

    const { movies } = this.state;

    console.log(movies);

    return (
      <div className="App">
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className="list">
              <img src={`${sourceImage}${movie.backdrop_path}`} alt=""/>
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
