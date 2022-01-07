import React from 'react'

import { useSelector } from 'react-redux';

function MovieDetails() {
   

    const Movie = useSelector(state => state.FilmReducer.Movie)
    return (
        <div style={{border:'1px solid black' ,backgroundColor:'black',width:"1600px"}}>
          
        <h1 style={{marginTop:'60px'}}>{Movie.titre}</h1>
        <div style={{display:'flex' , justifyContent:'space-evenly'}}>
        <img src={Movie.photo} style={{width:"400px"}}/>
          <video style={{width:'650px',height:'550px'}}  controls loop>
          <source src={Movie.trailer} type="video/mp4"/>
          <source src={Movie.trailer} type="video/webm"/>
          <source src={Movie.trailer} type="video/ogg"/>
          </video>
          
          
          </div>
          <p style={{color:"white",fontFamily:"sans-serif",fontSize:"15px"}}>{Movie.desc}</p>
          </div>
    )
    }
export default MovieDetails
