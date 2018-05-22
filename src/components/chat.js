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
  background: rgb(130, 224, 255); 
  border: none;
  padding: 10px;
`

const Chat = (props) => {
  let key = 0;
  console.log(props.messages)
  return (
    <ChatBox className="Chatbox">
      <ul id="messages">
        {props.messages.length > 0 &&
          props.messages.map((message) =>
            <li key={++key}>{message}</li>
          )
        }
      </ul>
      <Form onSubmit={props.sendMessage}>
        <Input onChange={props.handleMessageChange} id="m" autocomplete="off" reg='message'/><Button>Send</Button>
      </Form>
    </ChatBox>
  );
}
export default Chat;
