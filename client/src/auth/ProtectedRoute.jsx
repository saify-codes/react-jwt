import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const {session} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (session.status === 'unauthenticated')
            navigate('/login')
    },[navigate, session])

    return <>
        {children}
    </>
}
