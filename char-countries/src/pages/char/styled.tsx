import styled from "styled-components";

export const CharBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: '5vh';
    background-color: '#20BF55';
    width: 100%;
    height: 80%;
`

export const MainBoxProfile = styled.div`
    border: 2px solid #757575;
    border-radius: 5px;
    height: 40vh;
    width: 12vw;
    display: flex;
    flex-direction: column;
    background-color: #01BAEF;
    align-items: center;
    padding-top: 1vmax;
`

export const ProfilePhoto = styled.img`
    border: 1px solid #757575;
    height: 20vh;
    display: flex;
    align-items: center;
    background-size: initial;
    border-radius: 2px;
    background-color: #FBFBFF;
`

export const TitleInfo = styled.h5`
    font-size: 1vmax;
    color: #FBFBFF;
`

export const ButtonBox = styled.div`
    width: 30%;
    height: 4vh;
    display: flex;
    justify-content: space-evenly;
`

export const Button = styled.div`
    border: 2px solid #757575;
    border-radius: 4px;
    width: 2vmax;
    height: 2vmax;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #01BAEF;
    color: #FBFBFF;
    cursor: pointer;
`