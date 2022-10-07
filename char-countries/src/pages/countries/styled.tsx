import styled from "styled-components";

export const CountryBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    padding: 0;
    margin: 0;
    width: 100%;
    align-items: center;
`

export const OneCountry = styled.div`
    display: flex;
    flex-direction: row;
    width: 10vw;
    justify-content: space-between;
    height: 3.5vh;
`

export const TitleInfo = styled.h5`
    color: #FBFBFF;
`

export const ButtonBox = styled.div`
    width: 30%;
    height: 4vh;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.5vh;
`

export const Button = styled.div`
    border: 2px solid #757575;
    border-radius: 4px;
    width: 15vw;
    height: 2vmax;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #526760;
    color: #FBFBFF;
    cursor: pointer;
`