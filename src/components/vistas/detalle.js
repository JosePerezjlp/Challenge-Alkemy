import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Detalle (){
    const  [movie,setMovie] = useState(null)

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(()=>{
       
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=54cda43a77755a6d1aca4d4062597e4d&language=es-ES`
        axios.get(endPoint)
        .then(response =>{
            const apiData = response.data
            setMovie(apiData)
        })
       .catch(error => {
        console.log(error)
       })
    },[movieID]);
    console.log(movie)
    return (
        <>
        { !token && <Navigate to='/'/>}
        { !movie && <p>Cargando....</p>}
        { movie && <>  
        <h2>Titulo :{movie.title} </h2>
        <div className="row">
        <div className="col-4">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
        </div>
        <div className="col-8">
            <h5>Fecha de estreno {movie.release_date} </h5>
            <h5>Reseña:</h5>
            <p>{movie.overview} </p>
        <h5>Generos</h5>
        <ul>
        {movie.genres.map(genre=> <li key={genre.id}>{genre.name} </li>)}
        </ul>
        </div>
        </div>
        </>
        }
        </>
        )
        
}
export default Detalle;