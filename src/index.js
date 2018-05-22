import React from 'react';
import { render } from 'react-dom';
import Signup from './components/signup'
import Questionnaire from './components/questionnaire'
import Chat from './components/chat'
import openSocket from 'socket.io-client';
import styled, { injectGlobal } from 'styled-components';
import Chalet1970 from './assets/ChaletNewYorkNineteenSeventy.ttf';

injectGlobal`
  @font-face {
    font-family: Chalet1970;
    src: url('${Chalet1970}') format('opentype');
  }
`

const Everything = styled.div`
  font-family: 'Montserrat';
  color: #424242
`

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      view:'signup',
      firstname: '',
      email: '',
      newMessage: '',
      messages: [],
    }

    const context = this;
    const socket = openSocket('http://localhost:3000');
    socket.on('chat message', function (data) {
      context.addFetched(data);
    });

    this.handleSignup = this.handleSignup.bind(this);
    this.handleQuestionnaire = this.handleQuestionnaire.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.addFetched = this.addFetched.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);

  }

  renderView() {
    const {view} = this.state;
    if (view === 'signup') {
      return <Signup getName={this.getName} getEmail= {this.getEmail} handleSignup={this.handleSignup}/>
    } else if (view === 'questionnaire') {
      return <Questionnaire firstname={this.state.firstname} handleQuestionnaire={this.handleQuestionnaire}/>
    } else if (view === 'chat') {
      return <Chat messages={this.state.messages} sendMessage={this.sendMessage} handleMessageChange={this.handleMessageChange}/>
    } else {
      this.updateViews(view)
      return <Post postId={view} posts={posts}/>
    }
  }

  handleMessageChange(e) {
    this.setState({newMessage: e.target.value})
  }

  sendMessage(e) {
    e.preventDefault();
    socket.emit('chat message', this.state.newMessage );
  }

  getName(e) {
    this.setState({firstname: e.target.value})
  }

  getEmail(e) {
    this.setState({email: e.target.value})
  }

  addFetched(data) {
    const newMessages = this.state.messages
    newMessages.push(data);
    this.setState({messages: newMessages})
  }

  handleSignup(e) {
    e.preventDefault();
    this.setState({
      view: 'questionnaire'
    });
  }

  handleQuestionnaire(e) {
    e.preventDefault();
    this.setState({
      view: 'chat'
    });
  }

  componentDidMount() {
    // const context = this;
    // $.ajax({
    //   url: 'http://localhost:3000/api/blogs',
    //   method: 'GET',
    //   contentType: 'application/json',
    //   success: function(data) {
    //     context.setState({
    //       posts:data
    //     })
    //   },
    //   error: function(err) {
    //     console.log(err);
    //   }
    // })
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <Everything className="main">
        {this.renderView()}
      </Everything>
    );
  }
}
render(<App />, document.getElementById('app'));
