import { useEffect , useState} from "react";
import React from "react";
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';

function Listado (addOrRemoveFromFavs){
    let token = sessionStorage.getItem('token');
    const [movieList,setMovieList] = useState([])

    useEffect(()=>{
        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=54cda43a77755a6d1aca4d4062597e4d&language=es-ES&page=1'
        axios.get(endpoint)
        .then(response =>{
            const apiData = response.data
            setMovieList(apiData.results)
        })
    },[setMovieList])

    console.log(movieList)
        
    return(
        <>
        {!token && <Navigate to='/' />}

        <div className="row">
            {movieList.map((oneMovie,idx)=>{
                const movieData = {
                    imgURL: `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`,
                    overview: oneMovie.overview,
                    title: oneMovie.title
                  };
                return(
                    <div className="col-4"key={idx}>
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                        <button 
                            className="favourite-btn"
                            >
                            
                        <span>🖤</span>
                        </button>
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
export default Listado;