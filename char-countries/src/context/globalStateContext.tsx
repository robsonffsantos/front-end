import { createContext, useState, useContext, useMemo, useEffect } from "react"
import { UserContextProps, UserContextType, Profile } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [profile, setProfile] = useState<Profile[]>([])
  const [page, setPage] = useState<number>(1)

  const countries = useMemo(() => ({
    'ARGENTINA': ['BOLIVIA', 'BRASIL', 'CHILE', 'PARAGUAI', 'URUGUAI'],
    'BRASIL': ['ARGENTINA', 'BOLIVIA', 'COLOMBIA', 'GUIANA FRANCESA', 'GUIANA FRANCESA', 'PARAGUAI', 'PERU', 'SURINAME', 'URUGUAI', 'VENEZUELA'],
    'BOLIVIA': ['ARGENTINA', 'BRASIL', 'CHILE', 'PARAGUAI', 'PERU'],
    'CHILE': ['ARGENTINA', 'BOLIVIA', 'PERU'],
    'COLOMBIA': ['BRASIL', 'EQUADOR', 'PANAMA', 'PERU', 'VENEZUELA'],
    'EQUADOR': ['COLOMBIA', 'PERU'],
    'GUIANAFRANCESA': ['BRASIL', 'SURINAME', 'VENEZUELA'],
    'PANAMA': ['COLOMBIA'],
    'PARAGUAI': ['ARGENTINA', 'BOLIVIA', 'BRASIL'],
    'PERU': ['BOLIVIA', 'BRASIL', 'CHILE', 'COLOMBIA', 'EQUADOR'],
    'SURINAME': ['BRASIL', 'GUIANA FRANCESA', 'GUY'],
    'VENEZUELA': ['COLOMBIA', 'BRASIL', 'GUIANA FRANCESA'],
    'URUGUAI': ['ARGENTINA', 'BRASIL'] 
  }), [])

  const [orderCountry, setOrderCountry] = useState<string[]>([])

  const orderCountriesFunction = () => {
    const keyObject = Object.keys(countries);

    const orderCountries = keyObject.sort(
        (a, b) => countries[b as keyof typeof countries].length - countries[a as keyof typeof countries].length
    )

    setOrderCountry(orderCountries)
}

  const getProfile = async() => {
      await axios.get(`${BASE_URL}/${page}`)
      .then((res) => {
          setProfile(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
      orderCountriesFunction()
    }, [])

  const variables = { profile, setProfile, getProfile, setPage, page, countries, orderCountry }

  return (
    <GlobalStateContext.Provider value={variables}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export function useUser(): UserContextType {
  const context = useContext(GlobalStateContext)

  if (!context) {
    throw new Error('UserProvider Error')
  }

  return context
}