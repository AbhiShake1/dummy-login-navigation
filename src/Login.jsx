import { TextField, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { homeRoute } from './core/routes/routerPath'

export const Login = () => {
  const navigate = useNavigate();

  const email = useRef(null)
  const password = useRef(null)

  function onEmailChange(args) { email.current = args.target.value }
  function onPasswordChange(args) { password.current = args.target.value }

  function onLoginClick() {
    if (!(email.current && password.current)) {
      return
    }

    navigate(homeRoute)
  }

  return (
    <>
      <Stack alignItems='center'>
        <Typography variant='h3'>Login Here</Typography>
        <TextField type='email' onChange={onEmailChange} className='m-4' label='email' variant='outlined' />
        <TextField className='mb-4' onChange={onPasswordChange} type='password' label='password' variant='outlined' />
        <Button variant='outlined' onClick={onLoginClick}>Login</Button>
      </Stack>
    </>
  )
}

