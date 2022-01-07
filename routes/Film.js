const express =require('express');
const { AddFilm, GetFilm, GetOneFilm, UpdateFilm, DeleteFilm } = require('../controllers/AddFilm');

const FilmRoute=express.Router();


//Post movie URL:/

FilmRoute.post('/',AddFilm);

// Get movie URL :/
FilmRoute.get('/',GetFilm);
// Get Onemovie URL : /:id
FilmRoute.get('/:id',GetOneFilm);
// update Movie URL :/:id
FilmRoute.put('/:id',UpdateFilm);
//Delete Movie URL :/:id 
FilmRoute.delete('/:id',DeleteFilm);





module.exports=FilmRoute;