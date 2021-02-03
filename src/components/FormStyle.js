import styled from '@emotion/styled';


const Box = styled.div`
  width: 280px;
  min-height: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: var(--white01);
  box-shadow: 0 3px 15px rgba(0,0,0,0.3);
  position: relative;
  overflow: hidden;
`
const BoxHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8rem;
  padding-bottom: 5rem;
`
const HeaderBg = styled.div`
  width: 150%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: var(--orange01);
  background: linear-gradient(90deg, var(--orange02) 0%, var(--orange01) 100%);
`
const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2{
    font-size: 2rem;
    font-weight: 600;
    color: var(--white01);
    line-height: 1.2;
    letter-spacing: 4px;
    z-index: 999;
  }
  p{
    color: var(--white01);
    font-weight: 600;
    margin-top: 0.25rem;
    letter-spacing: 1px;
    z-index: 999;
  }
`
const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 80px;
  justify-content: center;
  grid-gap: 0.5rem;
`
const FormItem = styled.div`
  input{
    width: 250px;
    padding: 13px 12px 10px;
    border: 1px solid rgba(200,200,200, 0.05);
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    font-size: 1.125rem;
    &::placeholder{
      color: rgba(0,0,0, 0.4);
      letter-spacing: 1px;
    }
    &:focus{
      box-shadow: 0 2px 0 var(--orange01);
    }
  }
  p{
    color: var(--orange01);
    line-height: 1.6;
  }
`
const FormLink = styled.div`
  .link{
    color: var(--orange02);

    &:hover{
      color: var(--orange01);
    }
  }
`
const FormButton = styled.input`
  padding: 0.5rem 1.5rem;
  color: var(--white01);
  background: var(--orange01);
  background: linear-gradient(90deg, var(--orange02) 0%, var(--orange01) 100%);
  align-self: end;
  border-radius: 10px;
  font-size: 1.125rem;
  box-shadow: 0 4px 3px rgba(200,200,200,0.4);
  transition:all 0.8s;

  &:hover{
  }
`


export {Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormItem, FormLink, FormButton}