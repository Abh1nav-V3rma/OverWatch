import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    background-color: #333;
    color: #fff;
    padding-top: 10px;
    text-align: center;
    justify-content: center;
    width: 100%;
    heigth : 30px;
    position: fixed;
    bottom:0;
    left:0;
`

const Link = styled.a`
    flex : 3;
    font-size : 20px;
    text-decoration: none;
    font-color: #fff;

    &:visited {
        color:#fff;
    }

    &:hover{
        font-size: 24px;
    }

`

const Name = styled.span`
    flex : 1;
    font-size: 8px;
`


const Footer = () => {
    return (
        <Wrapper>
            <Link href="/"> Home </Link>
            <Link href="/movies"> Movies </Link>
            <Link href="/add"> Add </Link>
            <Link href="/update"> Update </Link>
            <Name> Created by: Prometheus</Name>
        </Wrapper>
    )
};

export default Footer;