import { createContext, useState, useContext } from "react"
import { UserContextProps, UserContextType, Profile } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [profile, setProfile] = useState<Profile[]>([])
  const [page, setPage] = useState<number>(1)

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