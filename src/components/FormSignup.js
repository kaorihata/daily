import {Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormText, FormCheck, FormLink, FormButton} from './FormStyle';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


export default function FormSignup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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
      <Form>
        <FormText>
          <input name="email" placeholder="Email"/>
        </FormText>
        <FormText>
          <input name="password" placeholder="Password"/>
        </FormText>
        <FormCheck>
          <input type="checkbox" name="check"/>
          <span>You agree to receive updates and offers from The Daily. You may opt out anytime.</span>
        </FormCheck>
        <FormButton type="submit" onClick={e => e.preventDefault()}/>
        <FormLink>Already registered? 
          <Link to="/login" className="link"> Login</Link>
        </FormLink>
      </Form>
    </BoxContent>
  </Box>
  )
};
