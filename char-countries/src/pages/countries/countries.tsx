import React, { Fragment, useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { MainContainer } from "../components/mainContainer"
import { MainBox } from "../components/mainBox"
import { CountryBox, OneCountry } from "./styled"

const CountriesOrdered = () => {
    const { countries, orderCountriesFunction } = useUser()
    const history = useNavigate()

    const randomOrder = Object.keys(countries)

    countries

    return (
        <MainContainer>
            <MainBox style={{ backgroundColor: '#374B4A', padding: '1vmax', flexDirection: 'row' }}>
                <CountryBox>
                        {randomOrder.map((country, index) => {
                            return <OneCountry key={country}> <div>{index + 1}</div> <div>{country}</div> </OneCountry>
                        })}
                </CountryBox>
            </MainBox>
        </MainContainer>
    )
}

export default CountriesOrdered