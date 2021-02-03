import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormItem, FormLink, FormButton } from './FormStyle';
import { Link } from 'react-router-dom';


export default function FormLogin(props) {

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
      <Form>
        <FormItem>
          <input name="email" placeholder="Email"/>
        </FormItem>
        <FormItem>
          <input name="password" placeholder="Password"/>
        </FormItem>
        <FormButton type="submit" />
        <FormLink>Don't have password, please 
          <Link to="/signup" className="link"> sign up</Link>
        </FormLink>
      </Form>  
    </BoxContent>
  </Box>
  )
};
