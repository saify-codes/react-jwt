import React from 'react'
import { useAuth } from '../context/auth'



export default function Home() {
  const { setSession } = useAuth()

  const logout = () => {
    setSession({user:null,status:'unauthenticated'})
    localStorage.clear()
  }
  
  return <>
    <button onClick={logout}>Logout</button>
  </>
}
