import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

/*
class Movie extends Component{

    static protoTypes = {
        title: protoTypes.string.isRequired, // 부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알 수 있음
        poster: protoTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
*/

function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index)=> <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='5'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

/*class MoviePoster extends Component{

    static protoTypes = {
        poster: protoTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} alt="Movie Poster"/>
        );     
    }
}
*/

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}
export default Movie; 
