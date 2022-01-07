import { GET_MOVIE, GET_MOVIES } from "../types/FilmTypes";


const initialState ={
    Movies:[],
    Movie:{}

}

const FilmReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_MOVIES: return {...state,Movies:action.payload.listOfMovies}
        case GET_MOVIE:  return {...state,Movie:action.payload.movie}    
            
    
        default:
            return state
    }
}
export default FilmReducer;