import { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { Profile } from "../../types/types"
import { MainBox } from "../components/mainBox"
import { MainContainer } from "../components/MainCOntainer"
import { useNavigate } from "react-router-dom"
import { CharBox, MainBoxProfile, ProfilePhoto, TitleInfo } from "./styled"

const Char = () => {
    const { getProfile, profile } = useUser()
    const history = useNavigate()

    useEffect(() => {
        getProfile()
    }, [])

    console.log(profile)

    return (
        <MainContainer>
            <MainBox style={{ alignItems: "center", backgroundColor: '#20BF55' }}>
                <CharBox>
                    {profile.map((user: Profile) => {
                        return <MainBoxProfile>
                            <ProfilePhoto src={user.photo} />
                            <TitleInfo>{user.firstName} {user.lastName}</TitleInfo>
                            <TitleInfo>{user.email}</TitleInfo>
                        </MainBoxProfile>                    
                    })}
                </CharBox>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </MainBox>
            
        </MainContainer>
    )
}

export default Char