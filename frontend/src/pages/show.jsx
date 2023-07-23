import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation} from "react-router-dom";
import axios from "axios";

const Show = () =>{
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        const getMovie = async () => {
            try{
                const response = await axios.get("http://localhost:8000/movie/" + id);
                setMovies(response.data[0]);
            }
            catch(err){
                console.log(err);
            }
        };
        getMovie();
    },[id]);


    return(
        <div>
            <h1>OverWatch</h1>
            <div className='displayMovie'>

                <div className="movie" key={movie.id}>
                    <h2 id="movieName">{movie.title}</h2>
                    <div>
                        <h4 id="relYear">{movie.releaseYear}</h4>
                        <h4 id="rating">IMDB: {movie.rating}/10</h4>
                    </div>
                    <h4 id="genre"><b>Genre: </b>{movie.genre}</h4>
                    {/* <h4 id="platform">Where to Watch:<br></br> {movie.Platform}</h4> */}
                    
                </div>
                
            </div>

        </div>
    )
}

export default Show