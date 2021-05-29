import styled from '@emotion/styled';


const Box = styled.div`
  width: 280px;
  min-height: 570px;
  margin: 60px auto 0;
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
  background-image: linear-gradient( 120deg, var(--orange02) 30%,  var(--orange01) 80% );
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
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormText = styled.div`
  width: 100%;
  margin-bottom: 0.4rem;
  input{
    width: 100%;
    padding: 13px 12px 10px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    font-size: 1.125rem;
    -webkit-appearance: none;
    &::placeholder{
      color: rgba(0,0,0, 0.4);
      letter-spacing: 1px;
    }
    &:focus{
      box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
    }
  }
  p{
    color: var(--orange01);
    line-height: 1.6;
  }
  span{
    color: var(--orange01);
  }
`
const FormCheck = styled.div`
  width: 100%;
  padding: 0 5px;
  span{
    padding-left: 5px;
  }
`
const FormError = styled.div`
  color: var(--orange01);
  background: #fff;
  box-shadow: 0px 0px 1px 3px var(--orange01);
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 10px;
`
const FormLink = styled.div`
  width: 100%;
  padding: 0 5px;
  .link{
    color: var(--orange02);

    &:hover{
      color: var(--orange01);
    }
  }
`
const FormButton = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  color: var(--white01);
  background: var(--orange01);
  background: linear-gradient(90deg, var(--orange02) 0%, var(--orange01) 100%);
  align-self: end;
  border-radius: 10px;
  font-size: 1.125rem;
  box-shadow: 0 4px 3px rgba(200,200,200,0.4);
  margin: 1.2rem auto 0.4rem;

  &:hover{
    background-color: var(--orange02);
    background: linear-gradient(90deg,var(--orange01)  0%, var(--orange02) 100%);
  }
`

export {Box, BoxHeader, HeaderBg, HeaderText, BoxContent, Form, FormText, FormCheck, FormError, FormLink, FormButton}