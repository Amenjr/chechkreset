import axios from 'axios';
import { GET_MOVIE, GET_MOVIES } from '../types/FilmTypes';
export const getMovies =()=>async(dispatch)=>{


    try {
        //communication with backend
        const res = await axios.get('/Movie');
        // communication with frontend
        dispatch({type:GET_MOVIES,payload: res.data});
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }

}
export const addmovie = (newMovie, Navigate)=>async(dispatch)=>{

    try {
      
  await axios.post('/Movie',newMovie)
     dispatch(getMovies())
  Navigate('/Movies')
    } catch (error) {
        console.log(error)
    }

}
export const deletemovie =(id,Navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/Movie/${id}`);
        dispatch(getMovies())
        Navigate('/Movies')
    } catch (error) {
        console.log(error)
    }

}
export const getOneMovie=(id)=>async(dispatch)=>{
    try {
         const res =await axios.get(`/Movie/${id}`);
         dispatch({type:GET_MOVIE, payload:res.data})
    } catch (error) {
        console.log(error)
    }
}