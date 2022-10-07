import styled from 'styled-components'

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 60vw;
  border: 2px solid #757575;
  border-radius: 10px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 98%;
  }
  @media screen and (max-width: 767px) {
    width: 98%;
  }
`