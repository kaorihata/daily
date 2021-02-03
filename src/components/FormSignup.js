import {Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormItem, FormLink, FormButton} from './FormStyle';
import { Link } from 'react-router-dom';


export default function FormSignup(params) {
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
        <FormItem>
          <input name="text" placeholder="FullName"/>
        </FormItem>
        <FormItem>
          <input name="email" placeholder="Email"/>
        </FormItem>
        <FormItem>
          <input name="password" placeholder="Password"/>
        </FormItem>
        <FormButton type="submit" />
        <FormLink>Already registered? 
          <Link to="/login" className="link"> Login</Link>
        </FormLink>
      </Form>
    </BoxContent>
  </Box>
  )
};
