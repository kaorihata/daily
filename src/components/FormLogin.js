import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import { Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormText, FormLink, FormButton } from './FormStyle';
import { Link } from 'react-router-dom';


export default function FormLogin(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormText>
          <input name="email" placeholder="Email" ref={register}/>
        </FormText>
        <FormText>
          <input name="password" placeholder="Password" ref={register}/>
        </FormText>
        <FormButton type="submit"/>
        <FormLink>Don't have password, please 
          <Link to="/signup" className="link"> sign up</Link>
        </FormLink>
      </Form>  
    </BoxContent>
  </Box>
  )
};
