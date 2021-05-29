import {Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormText, FormCheck, FormError, FormLink, FormButton} from './FormStyle';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'


export default function FormSignup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const checkRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try{
      setError(false)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError(true)
    }
  }

  return(
    <Box>
    <BoxHeader>
      <HeaderBg/>
      <HeaderText>
        <h2>Join us</h2>
        <p>Sign up to follow Daily News</p>
      </HeaderText>
    </BoxHeader>
    <BoxContent>
      <Form onSubmit={handleSubmit}>
        {error ? <FormError>Invalid Email and Password</FormError> : null}
        <FormText>
          <input name="email" placeholder="Email" ref={ emailRef } required/>
        </FormText>
        <FormText>
          <input name="password" placeholder="Password" ref={ passwordRef } required/>
        </FormText>
        <FormCheck>
          <input type="checkbox" name="check" ref={ checkRef }/>
          <span>You agree to receive updates and offers from The Daily. You may opt out anytime.</span>
        </FormCheck>
        <FormButton type="submit" />
        <FormLink>Already registered? 
          <Link to="/Daily/login" className="link"> Login</Link>
        </FormLink>
      </Form>
    </BoxContent>
  </Box>
  )
};
