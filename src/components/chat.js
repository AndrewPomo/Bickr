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

  return (
    <ChatBox className="Chatbox">
      <ul id="messages"></ul>
      <Form action="">
        <Input id="m" autocomplete="off" /><Button>Send</Button>
      </Form>
    </ChatBox>
  );
}
export default Chat;
