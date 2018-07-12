import React from 'react';
import { render } from 'react-dom';
import Signup from './components/signup'
import Login from './components/login'
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

  .signup-appear , .login-appear {
    opacity: 0.01;
  }
  
  .signup-appear.signup-appear-active , .login-appear.login-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
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
      username: '',
      email: '',
      password: '',
      phone_number: '',
      authCode: '',
      newMessage: '',
      messages: [],
      authForm: 'off'
    }

    const context = this;
    const socket = openSocket('http://localhost:3000');
    socket.on('chat message', function (data) {
      context.addFetched(data);
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUp = this.signUp.bind(this);

  }

  signUp() {
    const { username, password, email, phone_number } = this.state
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number
      }
    })
    .then(() => {
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          email
        })
      })
      .then(response => {
        if (response === "success") {
          this.setState({
            view: e.target.dataset.next,
            authForm: 'on'
          })
        }
      })
    })
    .catch(err => console.log('error signing up: ', err))
  }

  confirmSignUp () {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(console.log('successful confirm sign up!'))
    .catch(err => console.log('error confirming signing up: ', err))
  }


  renderView() {
    const {view} = this.state;
    if (view === 'signup') {
      return <Signup
        authForm = {this.state.authForm}
        handleInputChange={this.handleInputChange} 
        handleSubmit={this.handleSubmit}/>
    } else if (view === 'login') {
      return <Login 
        handleInputChange={this.handleInputChange} 
        handleSubmit={this.handleSubmit}/>
    } else if (view === 'questionnaire') {
      return <Questionnaire 
        name={this.state.username} 
        handleSubmit={this.handleSubmit}/>
    } else if (view === 'chat') {
      return <Chat 
        messages={this.state.messages} 
        handleSubmit={this.handleSubmit} 
        handleInputChange={this.handleInputChange}/>
    } /*else {
      this.updateViews(view)
      return <Post postId={view} posts={posts}/>
    }*/
  }

  handleInputChange(e) {
    const newState = {}
    if(e.target.name === 'phone_number') {
      let phone_number = '+1' + e.target.value.replace(/[- )(]/g,'');
      newState[e.target.name] = phone_number;
    } else {
      newState[e.target.name] = e.target.value
    }
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.dataset.next) {
      
    }
    if (this.state.view === 'signup') {
      e.preventDefault();
      this.signUp();
      // make user be logged in.
    } else if (this.state.view === 'chat') {
      e.preventDefault();
      const toSend = {
        name: this.state.username,
        message: this.state.newMessage
      }
      socket.emit('chat message', toSend );
    }
  }

  addFetched(data) {
    const newMessages = this.state.messages
    newMessages.push(data);
    this.setState({messages: newMessages})
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
// registerServiceWorker()
