import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'
function MovieList() {
    const Movies = useSelector(state => state.FilmReducer.Movies)
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {Movies.map(Movie=><MovieCard Movie={Movie} key={Movie._id}/>)}
        </div>
    )
}

export default MovieList;
