import React, {useState, useEffect} from "react";
import axios from 'axios';
import Title from "../components/Title";
import Footer from "../components/footer";
import { styled } from "styled-components";

const Container = styled.div`
    flex:4;
`

const DisplayMovies = styled.div`    
    display: flex;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    
    @media (min-width: 900px) {
        grid-template-columns: repeat(4, minmax(280px, 1fr));
    }
      
    @media (max-width: 900px) {
    grid-template-columns: repeat(2, 280px);
    }
    
    @media (max-width: 480px) {
    grid-template-columns: 1fr;
    } 

    padding-left:25px;
    gap: 20px;
    align-items:center;
    justify-content: center;

`

const Movie = styled.div`
    flex:1;
    padding-top:10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.6);

    width: 300px;
    height: 300px;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`



const MovieTitle = styled.span`
    flex:1;
    font-size:25px;
    
`
const MovieDetails = styled.div`
    flex:2;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Left = styled.div`
    flex: 1;
    background-color: red;
    display:flex;
    flex-direction: column;
    justify-content: flex-start
    // align-items:center;
    
`

const RelYear = styled.span`
    background-color: blue;
    flex:1;
    font-size:30px;
    padding: 0px;
`

const Genre = styled.span`
    flex:1;
`


const Right = styled.div`
    flex:1;
`


const Rating = styled.span`
    flex:2;
    text-align: left;
    font-size:19px;
    padding-left: 40px ;
    display: inline;
`




const Rate = styled.span`
    font-size: 30px;
`



const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () =>{
        fetchAllMovies();
    },[]);

    const fetchAllMovies = async () => {
        try { 
            const response = await axios.get('http://localhost:5000/api/movies');
            setMovies(response.data);
        } catch(error) {
            console.error('Error in fetching movies: ', error);
        }
    };


    return (
        <Container>
            <Title />
            {movies.length === 0 ? (
                <p> No movies found</p>
            ) : (
                <DisplayMovies>
                    { movies.map( ( movie, index) => (
                        <Movie key = {movie.id}>
                            <MovieTitle>{movie.title}</MovieTitle>
                            <MovieDetails>
                                <Left>
                                    <RelYear>{movie.releaseYear}</RelYear>
                                    <Genre><b>Genre: </b>{movie.genre}</Genre>
                                </Left>
                                <Right>
                                    <Rating>IMDB: <Rate>{movie.rating}</Rate>/10</Rating>
                                </Right>
                            </MovieDetails>
                            
                        </Movie>
                    ))}
                </DisplayMovies>
            )}

            <Footer />
        </Container>
    )
};

export default MovieList;