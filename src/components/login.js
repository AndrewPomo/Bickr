import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

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

const Switch = styled(Link)`
  margin: auto;
  margin-top: 25px;
  margin-bottom: 0px;
  color: #fd5068;
  text-decoration: underline;
`

const Login = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="login"
      transitionAppear={true}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppearTimeout={500}>
      <FormContainer>
        <Form 
          onSubmit={props.handleSubmit} 
          data-next="questionnaire">
          <TopFormInput 
            onChange={props.handleInputChange} 
            type="email" 
            name="email" 
            placeholder="Email"/>
          <FormInput 
            onChange={props.handleInputChange} 
            type="password" 
            ame="password" 
            placeholder="Password"/>
          <Button 
            type="submit" 
            value="Log In"/>
        </Form>
      </FormContainer>
      <br/>
      <Switch 
        className={props.className} 
        to={'/signup'}>
        Don't have an account? Click here to sign up.
      </Switch>
    </ReactCSSTransitionGroup>
  );
}
export default Login;
