import React, { useState } from "react";
import { styled } from "styled-components";
import Title from "../components/Title";
import Footer from "../components/footer";

const Container = styled.div`
    flex:1;
    border: 1px solid #ccc;

`

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    border: 1px solid #ccc;
`

const FormTitle = styled.h2`
    flex:1;
    font-size:40px;
    border: 1px solid #ccc;

`

const Form = styled.form`
    flex:5;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Label = styled.label`
    flex:1;
    font-size:20px;
`

const Input = styled.input`
    flex:1;
    font-size:20px;
    align-item: right;
`

const Submit = styled.button`
`

const BR = styled.br`
`


const Add = () => {
    const [title, setTitle] = useState('');
    const [film_desc, setFilm_desc] = useState('');
    const [rating, setRating] = useState('');
    const [runtime, setRuntime] = useState('');
    const [release_year, setRelease_year] = useState('');
    const [director, setDirector] = useState('');
    const [actors, setActors] = useState('');
    const [poster, setPoster] = useState('');
    const [trailer, setTrailer] = useState('');
    const [watch_links, setWatch_links] = useState('');
    const [genres, setGenres] = useState('');
    const [rated, setRated] = useState('');

    return(
        <Container>
            <Title />
                <Wrapper>
                    <FormTitle> Add Movies</FormTitle>
                    <Form >
                        <Label>
                            Title:
                            <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Label>
                        <Label>
                            Released In:
                            <Input type='text' value={release_year} onChange={(e) => setRelease_year(e.target.value)} />
                        </Label>
                        <Label>
                            Run-Time:
                            <Input type='number' value={runtime} onChange={(e) => setRuntime(e.target.value)} />
                        </Label>
                        <Label>
                            Rating:
                            <Input type='number' step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </Label>
                        <Label>
                            Director:
                            <Input type='text' value={director} onChange={(e) => setDirector(e.target.value)} />
                        </Label><Label>
                            Actors:
                            <Input type='text' value={actors} onChange={(e) => setActors(e.target.value)} />
                        </Label>
                        <Label>
                            Trailer Link:
                            <Input type='text' value={trailer} onChange={(e) => setTrailer(e.target.value)} />
                        </Label>
                        <Label>
                            Watch Platforms:
                            <Input type='text' value={watch_links} onChange={(e) => setWatch_links(e.target.value)} />
                        </Label>
                        <Label>
                            Rated:
                            <Input type='text' value={rated} onChange={(e) => setRated(e.target.value)} />
                        </Label>
                        <Label>
                            Genres:
                            <Input type='text' value={genres} onChange={(e) => setGenres(e.target.value)} />
                        </Label>
                        <Label>
                            Film Description:
                            <Input type='text' value={film_desc} onChange={(e) => setFilm_desc(e.target.value)} />
                        </Label>
                        
                        <Label>
                            Poster:
                            <Input type='file' accept="image/*" value={poster} onChange={(e) => setPoster(e.target.value)} />
                        </Label>

                        <BR />

                        <Submit type="submit">
                            Submit
                        </Submit>
                    </Form>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Add;