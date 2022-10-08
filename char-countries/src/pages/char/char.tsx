import { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { Profile } from "../../types/types"
import { MainBox } from "../components/mainBox"
import { MainContainer } from "../components/mainContainer"
import { useNavigate } from "react-router-dom"
import { Button, ButtonBox, CharBox, MainBoxProfile, ProfilePhoto, TitleInfo } from "./styled"
import { MainButton } from "../components/mainButton"

const Char = () => {
    const { getProfile, profile, page, setPage } = useUser()
    const history = useNavigate()

    useEffect(() => {
        getProfile()
    }, [page])

    return (
        <MainContainer>
            <MainBox style={{ alignItems: "center", backgroundColor: '#8B8BAE' }}>
                <CharBox>
                    {profile.map((user: Profile) => {
                        return <MainBoxProfile>
                            <ProfilePhoto src={user.photo} />
                            <TitleInfo>{user.firstName} {user.lastName}</TitleInfo>
                            <TitleInfo>{user.email}</TitleInfo>
                        </MainBoxProfile>                    
                    })}
                </CharBox>
                <ButtonBox>
                    <Button onClick={() => setPage(1)}>1</Button>
                    <Button onClick={() => setPage(2)}>2</Button>
                    <Button onClick={() => setPage(3)}>3</Button>
                </ButtonBox>
                <MainButton onClick={() => history('/')}>HOME</MainButton>  
            </MainBox>          
        </MainContainer>
    )
}

export default Char