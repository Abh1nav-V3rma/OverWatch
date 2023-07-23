import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import Navbar from "../components/navbar";
// import movies from "../movies"


const DisplayMovies = () =>{

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async() => {
        try{
            const response = await axios.get("http://localhost:8000/movies");
            setMovies(response.data);
            
        }
        catch(err){
            console.log(err);
        }
    }
    fetchAllMovies();
    },[])

    return(
        <div>
            
            <Navbar />
        </div>
    )

}

export default DisplayMovies;



// {/* <h1>OverWatch</h1>
//             <div className='displayMovie'>
//                 { movies.map( (movie, index) => (
//                     <div className="movie" key={movie.id}>
                        
//                         <h2 id="movieName">{movie.title}</h2>
//                         <div>
//                             <h4 id="relYear">{movie.releaseYear}</h4>
//                             <h4 id="rating">IMDB: {movie.rating}/10</h4>
//                         </div>
//                         <h4 id="genre"><b>Genre: </b>{movie.genre}</h4>
                        
//                     </div>
//                 )) }
//             </div> */}