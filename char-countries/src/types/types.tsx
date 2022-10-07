import { ReactNode } from "react"

export type Profile = {
  id: number,
  photo: string,
  firstName: string,
  lastName: string,
  email: string
}

export type Countries = {
    ARGENTINA: string[],
    BRASIL: string[],
    BOLIVIA: string[],
    CHILE: string[],
    COLOMBIA: string[],
    EQUADOR: string[],
    GUIANAFRANCESA: string[],
    PANAMA: string[],
    PARAGUAI: string[],
    PERU: string[],
    SURINAME: string[],
    VENEZUELA: string[],
    URUGUAI: string[],
}

export type UserContextType = {
  profile: Profile[],
  getProfile: () => void,
  page: number,
  setPage: (value: number) => void,
  countries: Countries,
  orderCountry: string[]
}

export type UserContextProps = {
  children: ReactNode
}