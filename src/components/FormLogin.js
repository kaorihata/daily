import React, { useRef, useState } from 'react';
import { Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormText, FormError, FormLink, FormButton } from './FormStyle';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export default function FormLogin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
  
    try {
      setError(false)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError(true)
    }
  }

  return (
    <Box>
    <BoxHeader>
      <HeaderBg/>
      <HeaderText>
        <h2>Welcome</h2>
        <h2>Back</h2>
        <p>Please login to continue!</p> 
      </HeaderText>
    </BoxHeader>
    <BoxContent>
      <Form onSubmit={handleSubmit}>
        {error ? <FormError>Invalid Email or password</FormError> : null}
        <FormText>
          <input name="email" placeholder="Email" ref={emailRef} required/>
        </FormText>
        <FormText>
          <input name="password" placeholder="Password" ref={passwordRef} required/>
        </FormText>      
        <FormButton type="submit"/>
        <FormLink>Don't have password, please 
          <Link to="/Daily/signup" className="link"> sign up</Link>
        </FormLink>
      </Form>  
    </BoxContent>
  </Box>
  )
};
