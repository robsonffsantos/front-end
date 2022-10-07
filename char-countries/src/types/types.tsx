import { ReactNode } from "react"

export type Profile = {
  id: number,
  photo: string,
  firstName: string,
  lastName: string,
  email: string
}

export type UserContextType = {
  profile: Profile[],
  getProfile: () => void
}

export type UserContextProps = {
  children: ReactNode
}