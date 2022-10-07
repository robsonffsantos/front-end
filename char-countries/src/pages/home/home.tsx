
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MainContainer } from "../components/mainContainer"
import { MainBox } from "../components/mainBox"
import { Characters, Countries, Line, MainText } from "./styled"

const Home = () => {
  const history = useNavigate()

  return (
    <MainContainer>
      <MainBox>
        <Characters onClick={() => history('/characters/1')}>
          <MainText>
            Ficha de usuários
          </MainText>
        </Characters>
        <Line/>
        <Countries onClick={() => history('/countries')}>
          <MainText>
            Fronteiras de países
          </MainText>
        </Countries>
      </MainBox>
    </MainContainer>
  )
}

export default Home