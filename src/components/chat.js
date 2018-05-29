import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const ChatBox = styled.div`
 font: 13px Helvetica, Arial;
`

const Form = styled.form`
  background: #000; 
  padding: 3px; 
  position: fixed; 
  bottom: 0; 
  width: 95%;
`

const Input = styled.input`
  border: 0;
  padding: 10px; 
  width: 90%; 
  margin-right: .5%; 
`

const Button = styled.button`
  width: 9.5%; 
  background: #fd5068; 
  border: none;
  padding: 10px;
`

const List = styled.ul`
  list-style-type: none;
`

const Chat = (props) => {
  let key = 0;
  return (
    <ChatBox className="Chatbox">
      <List id="messages">
        {props.messages.length > 0 &&
          props.messages.map((message) =>
            <li key={++key}><b>{message.name}:</b> {message.message}</li>
          )
        }
      </List>
      <Form onSubmit={props.handleSubmit}>
        <Input onChange={props.handleInputChange} id="m" name="newMessage" autocomplete="off" reg='message'/><Button>Send</Button>
      </Form>
    </ChatBox>
  );
}
export default Chat;
