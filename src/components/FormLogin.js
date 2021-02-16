import { useForm } from 'react-hook-form';
import { Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormText, FormLink, FormButton } from './FormStyle';
import { Link } from 'react-router-dom';


export default function FormLogin({ login }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async data => {
    await login(data.email, data.password);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormText>
          <input name="email" placeholder="Email" 
          aria-invalid={errors.email ? "true" : "false"}
          ref={register({
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })}/>
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </FormText>
        <FormText>
          <input name="password" placeholder="Password" 
          aria-invalid={errors.password ? "true" : "false"}
          ref={register({
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5"
            }
          })}/>
          {errors.password && <span role="alert">{errors.password.message}</span>}
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
