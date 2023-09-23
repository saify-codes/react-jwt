import React, { createContext, useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Context = createContext()

export function useAuth() {
    return useContext(Context)
}

export default function Provider({ children }) {
    const [session, setSession] = useState({status:'loading'})
    useEffect(() => {
        const session = localStorage.getItem('session')
        if (session){
            setSession({user:JSON.parse(session), status:'authenticated'})
        }else{
            setSession({user:null, status:'unauthenticated'})
        }

    }, [])
    return <Context.Provider value={{ session, setSession }}>
        {children}
    </Context.Provider>
}
