const FilmSchema = require("../models/Film")




exports.AddFilm = async (req,res)=>{
    try {
        const newMovie = new FilmSchema(req.body);
        await newMovie.save();
        res.status(200).send({msg:'new movie',newMovie});
        
    } catch (error) {
        res.status(500).send('could not add movie');
    }
}
exports.GetFilm = async (req,res)=>{
    try {
        const  listOfMovies = await FilmSchema.find();
        res.status(200).send({msg:'list of movies',listOfMovies});

    } catch (error) {
        res.status(500).send('could not show list of movies')
    }
}
exports.GetOneFilm = async (req,res)=>{
    const {id}=req.params
    try {
        const movie = await FilmSchema.findById(id);
        res.status(200).send({msg:'this movie',movie});
    } catch (error) {
        res.status(500).send('could not show movie');
    }
}
exports.DeleteFilm = async (req,res)=>{
    const {id}=req.params;
    try {
        const movieDeleted = await FilmSchema.findByIdAndDelete(id);
        res.status(200).send({msg:'movie deleted',movieDeleted});
    } catch (error) {
        res.status(500).send('could not delete this movie');
    }
}
exports.UpdateFilm = async (req,res)=>{
    const {id}=req.params;
    try {
        const movieUpdated = await FilmSchema.findOneAndUpdate(id,{$set:{...req.body}});
        res.status(200).send({msg:'movie updated',movieUpdated});
    } catch (error) {
        res.status(500).send('could not update this movie');
    }
}