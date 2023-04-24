import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [send, setSend] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email: ', email)
    console.log('Password: ', password)
    console.log('Formulario enviado')
    setSend(true)
    e.target.reset()
  }

  if (send) {
    return <Navigate replace to={`/dashboard`} />
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Usuario</label>
      <input
        type='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor='password'>Clave</label>
      <input
        type='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type='submit'>Ingresa</button>
    </form>
  )
}

export default LoginForm
