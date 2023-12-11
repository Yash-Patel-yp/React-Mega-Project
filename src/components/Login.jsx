import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from "./index"
import {Button, Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const Login = async(data) => {
        setError("")
        try {
            const session = await
            
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div>
      
    </div>
  )
}

export default Login
