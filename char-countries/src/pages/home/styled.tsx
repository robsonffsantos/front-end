import styled from 'styled-components'

export const Line = styled.hr`
    background-color: #757575;
    height: 0.5vh;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid #757575;
`

export const Characters = styled.div`
    background-color: #8B8BAE;
    width: 100%;
    height: 30vh;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Countries = styled.div`
    background-color: #374B4A;
    width: 100%;
    height: 30vh;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const MainText = styled.div`
    font-size: 2vmax;
    color: #FBFBFF;
`