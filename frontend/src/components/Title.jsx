import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width : 100vw;
`

const MainTitle = styled.h3`
    font-family: 'Bungee Shade', 'Bungee Spice' sans-serif;
    font-size:36px;
    // font-weight: bold;
    color: #ffffff;
`

const Title = () => {
    return(
        <Wrapper>
            <MainTitle>
                OverWatch
            </MainTitle>
        </Wrapper>
    )
};

export default Title;