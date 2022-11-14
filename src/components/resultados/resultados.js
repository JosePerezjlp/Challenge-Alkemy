import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import swAlert from '@sweetalert/with-react';

function Resultados (){
    const [moviesResults,setMoviesResults] = useState([])

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    console.log(keyword)

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=54cda43a77755a6d1aca4d4062597e4d&language=es-ES&query=${keyword}`

        axios.get(endPoint)
        .then(response =>{
        
            const moviesArray = response.data.results
        
            setMoviesResults(moviesArray)
        })
        .catch(error => console.log(error))
    },[keyword])


    return(
        <>
            <h2>Buscaste: <em>{keyword} </em></h2>

            {moviesResults.length === 0 && <h3>No hay resultados</h3>}
                        

            <div className="row">
            {moviesResults.map((oneMovie,idx)=>{
                return(
                    <div className="col-4"key={idx}>
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{oneMovie.title} </h5>
                            <p className="card-text">{oneMovie.overview.substring(0,100)} </p>
                            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                        </div>
                        </div>
                    </div>
                )
            })}
           
            </div>
        </>
    )
}

export default Resultados;