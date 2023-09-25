import React from 'react'
import { useAuth } from '../context/auth'



export default function Home() {
  const {logout} = useAuth()
  
  return <>
    <button onClick={()=>logout()}>Logout</button>
  </>
}
