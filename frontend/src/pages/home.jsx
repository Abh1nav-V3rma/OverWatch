import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";

const DisplayMovies = () =>{

    const [movie, display] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async() => {
        try{
            const response = await axios.get("http://localhost:8000/home");
            display(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchAllMovies()
},[])

    return(
        <div>
            <h1>OverWatch</h1>
            <div className='displayMovie'>
                {
                    movie.map(movie=>(
                        <div className="movie" key={movie.id}>
                            <h4>{movie.Movie_Name}</h4>
                            <h4>{movie.Rating}/10</h4>
                            <h4>{movie.Genre}</h4>
                            <h4>{movie.Platform}</h4>
                            <h4>{movie.Run_Time}</h4>
                            <h4>{movie.Realease_Year}</h4>
                        </div>
                ))}
            </div>

        </div>
    )

}

export default DisplayMovies