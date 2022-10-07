import { createContext, useState, useContext } from "react"
import { UserContextProps, UserContextType, Profile } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [profile, setProfile] = useState<Profile[]>([])
  const [page, setPage] = useState<number>(1)
  const countries = {
    'ARG': ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
    'BRA': ['ARG', 'BOL', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
    'BOL': ['ARG', 'BRA', 'CHL', 'PRY', 'PER'],
    'CHL': ['ARG', 'BOL', 'PER'],
    'COL': ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
    'ECU': ['COL', 'PER'],
    'GUF': ['BRA', 'SUR', 'VEN'],
    'PAN': ['COL'],
    'PRY': ['ARG', 'BOL', 'BRA'],
    'PER': ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
    'SUR': ['BRA', 'GUF', 'GUY'],
    'VEN': ['COL', 'BRA', 'GUF'],
    'URU': ['ARG', 'BRA'] 
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

  const variables = { profile, setProfile, getProfile, setPage, page }

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