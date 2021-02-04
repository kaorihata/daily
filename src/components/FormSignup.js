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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormText>
          <input name="email" placeholder="Email" ref={register} />
        </FormText>
        <FormText>
          <input name="password" placeholder="Password" ref={register}/>
        </FormText>
        <FormCheck>
          <input type="checkbox" name="check" ref={ register }/>
          <span>You agree to receive updates and offers from The Daily. You may opt out anytime.</span>
        </FormCheck>
        <FormButton type="submit" />
        <FormLink>Already registered? 
          <Link to="/login" className="link"> Login</Link>
        </FormLink>
      </Form>
    </BoxContent>
  </Box>
  )
};
