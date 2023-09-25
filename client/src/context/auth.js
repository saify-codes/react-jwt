import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Context = createContext()

export function useAuth() {
    return useContext(Context)
}


export default function Provider({ children }) {
    const navigate = useNavigate()
    const [session, setSession] = useState({ status: 'loading' })
    const logout = ()=>{
        setSession({user:null, status:'unathenticated'})
        localStorage.removeItem('session')
        navigate('/login')
    }


    useEffect(() => {
        const session = localStorage.getItem('session')
        if (session) setSession({ user: JSON.parse(session), status: 'authenticated' })
        else setSession({ user: null, status: 'unauthenticated' })
    }, [])
    return <Context.Provider value={{ session, setSession, logout }}>
            {children}
           </Context.Provider>
}
