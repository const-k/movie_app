import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdatre()

  state = {}

  componentDidMount() {
    // setTimeout(function(){}, 1000)
    // setTimeout(()=>{},1000) 같음
    this._getMovies();
  }

  _renderMovies = () => { // state가 비어있을 경우 에러 안나게 loading해주는 function (= loading state)
    const movies = this.state.movies.map(movie => {  // state가 비어있고 setTimeout을 통해(혹은 api를 통해) 데이터를 불러올 경우 state에 아무것도 없기때문에 에러남 -> loading해주는 function 필요
      console.log(movie)
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

   _getMovies = async() => {
    const movies = await this._callApi();
    this.setState({   // call api 작업이 완료되기 전까지 실행 x. await때문
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count') // fetch = 해당 주소 가져다가 붙임
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
