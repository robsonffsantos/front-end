import React, { Fragment, useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { MainContainer } from "../components/mainContainer"
import { MainBox } from "../components/mainBox"
import { CountryBox, OneCountry, TitleInfo, ButtonBox, Button } from "./styled"
import { MainButton } from "../components/mainButton"

const CountriesOrdered = () => {
    const { orderCountry, countries } = useUser()
    const history = useNavigate()



    return (
        <MainContainer>
            <MainBox style={{ backgroundColor: '#374B4A', padding: '1vmax', alignItems: "center" }}>
                <CountryBox>
                        {orderCountry.map((country, index) => {
                            return <OneCountry key={country}> <TitleInfo>{index + 1}</TitleInfo> <TitleInfo>{country}</TitleInfo> </OneCountry>
                        })}
                </CountryBox>
                <ButtonBox>
                </ButtonBox>
                <MainButton onClick={() => history('/')}>HOME</MainButton>
            </MainBox>
        </MainContainer>
    )
}

export default CountriesOrdered