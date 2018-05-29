import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
`

const Name = styled.span`
  color: #fd5068
`

const Form = styled.form`
  width: 100%;
`

const FirstChoice = styled.td`
  top:-10px
  font-size: 20px;
  width: 40%;
  text-align: right;
`

const SecondChoice = styled.td`
  top:-10px
  font-size: 20px;
  width: 40%;
  text-align: left;
`
const Divider = styled.td`
  top:-10px
  width: 5%
`

const Table = styled.table`
  border-collapse:separate; 
  border-spacing:1.2em;
  text-align: center;
  margin: 0px auto;
  width: 500px
  border: 1px solid #9b9b9b;
  border-radius: 20px;
`

const Issue = styled.td`
  text-align:center;
  height: 30px;
`

const IssueHeader = styled.h2`
  margin-bottom: 0px;
`

const Button = styled.input`
  margin: 0 auto;
  margin-top: 40px;
  width: 200px;
  padding 20px;
  border: 0;
  outline: 0;
  font-family: 'Montserrat';
  font-size: 100%;
  line-height: 1.15;
  color: white;
  background-color: #fd5068;
  overflow: visible;
  border-radius: 19px
  transition: .3s;
  &:hover{
    cursor:pointer;
  }
`

const Questionnaire = (props) => {
  return (
    <Container>
      <h1>Welcome, <Name>{props.name}</Name>!</h1>
      <p>To get started, simply select the correct stance on the following issues</p>
      <form onSubmit={props.handleQuestionnaire}>
        <Table>
          <tbody>
            <tr>
              <Issue colSpan="5" ><IssueHeader>Recreational Marijuana</IssueHeader></Issue>
            </tr>
            <tr>
              <FirstChoice>
                <label><input id="1" type="radio" value="legalize-weed-1" name="legalize-weed"/>Should be illegal</label>
              </FirstChoice>
              <Divider/>
              <SecondChoice>
                <label>Should be legal<input id="2" type="radio" value="legalize-weed-2" name="legalize-weed"/></label>
              </SecondChoice>
            </tr>
            <tr>
              <Issue colSpan="5"><IssueHeader>Gun Control Laws</IssueHeader></Issue>
            </tr>
            <tr>
              <FirstChoice>
                <label><input id="3" type="radio" value="gun-control-1" name="gun-control"/>Fewer Laws</label>
              </FirstChoice>
              <Divider/>
              <SecondChoice>
                <label>Tougher Laws<input id="4" type="radio" value="gun-control-2" name="gun-control"/></label>
              </SecondChoice>
            </tr>
            <tr>
              <Issue colSpan="5"><IssueHeader>Assisted Suicide</IssueHeader></Issue>
            </tr>
            <tr>
              <FirstChoice>
                <label><input id="5" type="radio" value="euthanasia-1" name="euthanasia"/>Should be legal</label>
              </FirstChoice>
              <Divider/>
              <SecondChoice>
                 
              <label>Should be illegal<input id="6" type="radio" value="euthanasia-2" name="euthanasia"/></label>
              </SecondChoice>
            </tr>
            <tr>
              <Issue colSpan="5"><IssueHeader>Illegal Immigration</IssueHeader></Issue>
            </tr>
            <tr>
              <FirstChoice>
                <label><input id="7" type="radio" value="illegal-immigration-1" name="illegal-immigration"/>Tougher Laws</label>
              </FirstChoice>
              <Divider/>
              <SecondChoice>
                <label>Fewer Laws<input id="8" type="radio" value="illegal-immigration-2" name="illegal-immigration"/></label>
              </SecondChoice>
            </tr>
            <tr>
              <Issue colSpan="5"><IssueHeader>Standardized Testing</IssueHeader></Issue>
            </tr>
            <tr>
              <FirstChoice>
                <label><input id="9" type="radio" value="standardized-testing-1" name="standardized-testing"/>Is effective</label> 
              </FirstChoice>
              <Divider/>
              <SecondChoice>
                <label>Is not effective<input id="10" type="radio" value="standardized-testing-2" name="standardized-testing"/></label>
              </SecondChoice>
            </tr>
          </tbody>
        </Table>
        <Button type="submit" value="Submit"/>
      </form> 
    </Container>
  );
}
export default Questionnaire;
