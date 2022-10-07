import { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { Profile } from "../../types/types"
import { MainBox } from "../components/mainBox"
import { MainContainer } from "../components/MainCOntainer"
import { useNavigate } from "react-router-dom"

const Char = () => {
    const { getProfile, profile } = useUser()
    const history = useNavigate()

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <MainContainer>
            <MainBox>
                {profile.map((user: Profile) => {
                    return <div>
                        <img src={user.photo} />
                        <div>{user.firstName}</div>
                        <div>{user.lastName}</div>
                        <div>{user.email}</div>
                    </div>                    
                })}
            </MainBox>
        </MainContainer>
    )
}

export default Char