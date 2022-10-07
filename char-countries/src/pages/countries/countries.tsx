import React, { Fragment, useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { MainContainer } from "../components/mainContainer"
import { MainBox } from "../components/mainBox"

const CountriesOrdered = () => {
    const { countries, orderCountriesFunction } = useUser()
    const history = useNavigate()

    const randomOrder = Object.keys(countries)

    countries

    return (
        <MainContainer>
            <MainBox style={{ backgroundColor: '#374B4A', padding: '1vmax' }}>
                <div>
                    {randomOrder.map((country) => {
                        return (<Fragment key={country}>
                            <div> {country} </div>
                            <div>{countries[country as keyof typeof countries].map((cty) => {
                                return (
                                    <div> {cty} </div>
                                )
                            })}</div>
                        </Fragment>)
                    })}
                </div>
            </MainBox>
        </MainContainer>
    )
}

export default CountriesOrdered