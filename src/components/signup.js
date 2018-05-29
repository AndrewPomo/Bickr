import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
`

const TypeLogo = styled.span`
  font-family: Chalet1970;
  color: #fd5068
`

const Header = styled.h1`
  margin: auto;
  margin-top: 35px;
  margin-bottom: 0px;
`

const SubHead = styled.p`
  color: #9b9b9b;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 25px;
`

const Logo = styled.img`
  display: block;
  width: 100px;
  margin: auto;
  margin-top: 50px;
`

const FormContainer = styled.div`
  display: block;
  margin: auto;
  border: 1px solid #9b9b9b;
  border-radius: 20px;
  width: 280px
`
const Form = styled.form`
border-radius: 6px;
margin: 0px;
`

const TopFormInput = styled.input`
  display: block;
  width: 100%;
  padding 20px;
  border: 0;
  outline: 0;
  font-family: 'Montserrat';
  font-size: 100%;
  line-height: 1.15
  overflow: visible;
  border-top-left-radius: 19px
  border-top-right-radius: 19px
  &:focus{
    background-color:#F5F5F5;
  }
  transition: .3s;
`
const FormInput = styled.input`
  display: block;
  width: 100%;
  padding 20px;
  border: 0;
  outline: 0;
  font-family: 'Montserrat';
  font-size: 100%;
  line-height: 1.15
  overflow: visible;
  &:focus{
    background-color:#F5F5F5;
  }
  transition: .3s;
`

const Button = styled.input`
  display: block;
  width: 100%;
  padding 20px;
  border: 0;
  outline: 0;
  font-family: 'Montserrat';
  font-size: 100%;
  line-height: 1.15;
  color: white;
  background-color: #fd5068;
  overflow: visible;
  border-bottom-left-radius: 19px
  border-bottom-right-radius: 19px
  transition: .3s;
  &:hover{
    cursor:pointer;
  }
`

const Signup = (props) => {
  console.log(props);
  return (
    <Container>
      <Logo src="https://i.imgur.com/fHnlo3t.png" alt="bickr-logo"/>
      <Header>Welcome to <TypeLogo>Bickr</TypeLogo></Header>
      <SubHead>For those who think they are right</SubHead>
      <FormContainer>
        <Form onSubmit={props.handleSubmit} data-next="questionnaire">
          <TopFormInput onChange={props.handleInputChange} type="text" name="firstname" placeholder="First Name"/>
          <FormInput onChange={props.handleInputChange} type="email" name="email" placeholder="Email"/>
          <Button type="submit" value="Start Bickering"/>
        </Form>
      </FormContainer>
    </Container>
  );
}
export default Signup;
