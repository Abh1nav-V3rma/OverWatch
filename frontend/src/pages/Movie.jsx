import React, {useState, useEffect} from "react";
import axios from 'axios';
import Title from "../components/Title";
import Footer from "../components/footer";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { YouTube} from "@material-ui/icons";


const Container = styled.div`
    flex = 1;
    
`

const Wrapper = styled.div`
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #333333;
    color:#ffffff;
    display:flex;
    justify-content: center;
    align-items: center;

`

const FilmImage = styled.img`
    flex:1;
    border:1px solid #ccc;

`


const FilmDetails = styled.div`
    flex:2;
    border:1px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


const FilmTitle = styled.div`
    flex:1;
    border: 1px solid #ccc;
    font-size:50px;
    width: 100%;

`

const Details = styled.div`
    flex:7;
    border:1px solid #ccc;
    width: 100%;
    padding: 0px;
`

const Rate = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
`

const Rating = styled.div`  
    font-size: 26px;
    border:1px solid #ccc;
    text-align:right;
    padding: 2px 100px 0px 5px;
`

const Rated = styled.div`
    font-size: 26px;
    border:1px solid #ccc;
    text-align:right;
    padding: 2px 20px 0px 5px;
`

const Genre = styled.div`
    font-size: 18px;
    border:1px solid #ccc;
    // border-radius: 10px;
    // width:100%;
    text-align: left;
    padding: 5px 5px 5px 40px;
    display: flex;
`

const DifferentGenre = styled.div`
    font-size: 16px;
    border:1px solid #ccc;
    border-radius: 15px;
    text-align: center;
    margin: 0px 0px 0px 10px;
    padding: 2px 10px 2px 10px;
`

const RelYear = styled.div`
    font-size: 18px;
    border:1px solid #ccc;
    // width:100%;
    text-align: left;
    padding: 5px 5px 5px 40px;
`

const RunTime = styled.div` 
    font-size: 18px;
    border:1px solid #ccc;
    // width:100%;
    text-align: left;
    padding: 5px 5px 5px 40px;
`

const Description = styled.p`
    font-size: 18px;
    border:1px solid #ccc;
    // width:100%;
    text-align: left;
    padding: 5px 5px 5px 40px;
`


const Director = styled.div`
font-size: 18px;
border:1px solid #ccc;
// width:100%;
text-align: left;
padding: 5px 5px 5px 40px;
`

const Actor = styled.div`
    font-size: 18px;
    border:1px solid #ccc;
    // width:100%;
    text-align: left;
    padding: 5px 5px 5px 40px;
`

const Links = styled.div`

    border:1px solid #ccc;
    // width:100%;
    text-align: left;
    padding: 5px 5px 5px 40px;

    display: flex;
    justify-content: right;
    align-items:center;
`

const Trailer = styled.a`
    text-decoration: none;
    border:1px solid #ccc;
    // width:100%;
    padding: 5px 5px 5px 5px;
`
const TrailerLink = styled.a`
    text-decoration: none;
    color: red;
    border:1px solid #ccc;
    // width:100%;
    padding: 5px 5px 5px 5px;
`

const Watch = styled.div`
    border:1px solid #ccc;
    // width:100%;
    padding: 5px 5px 5px 5px;
    display: flex;
    
`


const Movie = () => {
    const MovieId = useParams().id;
    console.log(MovieId);

    const [movie, setMovie] = useState([]);

    useEffect( () => {
        fetchMovie();   
        
    }, [MovieId]);

    const fetchMovie = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/movie/`+ MovieId)
            response.data.genres = response.data.genres.split(", ")
            response.data.watch_links = response.data.watch_links.split(", ")
            setMovie(response.data)

            console.log(response.data);
            
        } catch(error) {
            console.error(`Error inn fetching movie with id` + MovieId, error);
        }
    }

    return (
        <Container>
            <Title /> 
            { movie.length === 0 ? (<p></p>) : (
                <Wrapper key={movie.id}>
                    <FilmImage src={movie.poster} />
                    <FilmDetails>
                        <FilmTitle>T {movie.title}
                        </FilmTitle>
                        <Details>
                            <Rate>
                                <Rated>R</Rated>
                                <Rating>IMDB:  {movie.rating}</Rating>
                            </Rate>
                            <Genre>Genre :
                                {movie.genres.map((genre , index) => (
                                    <DifferentGenre key={index}> 
                                    {genre}
                                    </DifferentGenre>
                                ))}
                            </Genre> 
                            <RelYear>Released In : {movie.release_year}</RelYear>
                            <RunTime>RunTime: {movie.runtime}</RunTime>
                            <Description>{movie.film_desc}</Description>
                            <Director>Directed by: {movie.director}</Director>
                            <Actor>Actor: {movie.actors}</Actor>
                            <Links>
                                <Trailer >
                                    Trailer:
                                    <TrailerLink href={movie.trailer} target="_blank">
                                        <YouTube/>
                                    </TrailerLink>
                                </Trailer>
                                <Watch>
                                    Watch here: 
                                        {movie.watch_links.map((watch , index) => (
                                            <DifferentGenre key={index}> 
                                            {watch}
                                            </DifferentGenre>
                                        ))}
                                </Watch>
                            </Links>                        
                            
                        </Details>
                    </FilmDetails>
                </Wrapper>
            )}
            <Footer /> 
        </Container>
    );

};


export default Movie;