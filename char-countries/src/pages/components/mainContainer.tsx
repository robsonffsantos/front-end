import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 95vh;
  width: 99vw;
  justify-content: center;
  align-items: center;
  background-color: #FBFBFF;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 98%;
  }
  @media screen and (max-width: 767px) {
    width: 98%;
  }
`