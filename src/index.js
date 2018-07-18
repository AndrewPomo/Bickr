import React from 'react';
import { render } from 'react-dom';
import Signup from './components/signup'
import Login from './components/login'
import { BrowserRouter, Route, Link } from 'react-router-dom'
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

const routes = [
  {
    path:'/signup',
    component: Signup,
  }
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      view:'signup',
      username: '',
      email: '',
      password: '',
      newMessage: '',
      messages: [],
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
    const { username, password, email, phone_number } = this.state;

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
    .catch(err => console.log('error signing up: ', err))
  }

  // confirmSignUp () {
  //   Auth.confirmSignUp(this.state.username, this.state.authCode)
  //   .then(console.log('successful confirm sign up!'))
  //   .catch(err => console.log('error confirming signing up: ', err))
  // }


  renderView() {
    const {view} = this.state;
  //   if (view === 'signup') {
  //     return 
  //   } else if (view === 'login') {
  //     return <Login 
  //       handleInputChange={this.handleInputChange} 
  //       handleSubmit={this.handleSubmit}/>
  //   } else if (view === 'questionnaire') {
  //     return <Questionnaire 
  //       name={this.state.username} 
  //       handleSubmit={this.handleSubmit}/>
  //   } else if (view === 'chat') {
  //     return <Chat 
  //       messages={this.state.messages} 
  //       handleSubmit={this.handleSubmit} 
  //       handleInputChange={this.handleInputChange}/>
  //   } else if (view === 'home') {
  //     return <Home 
  //       messages={this.state.messages} 
  //       handleSubmit={this.handleSubmit} 
  //       handleInputChange={this.handleInputChange}/>
  //   } /*else {
  //     this.updateViews(view)
  //     return <Post postId={view} posts={posts}/>
  //   }*/
  }

  handleInputChange(e) {
    console.log('typed');
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
    console.log('supagain')

    // if (this.state.view === 'signup') {
    //   e.preventDefault();
    //   this.signUp();
    //   // make user be logged in.
    // } else if (this.state.view === 'chat') {
    //   e.preventDefault();
    //   const toSend = {
    //     name: this.state.username,
    //     message: this.state.newMessage
    //   }
    //   socket.emit('chat message', toSend );
    // }
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
    const context = this;
    console.log('sup')
    window.scrollTo(0, 0);
    return (
      <Everything className="main">
        <Container>
          <Logo src="https://i.imgur.com/fHnlo3t.png" alt="bickr-logo"/>
          <Header>Welcome to <TypeLogo>Bickr</TypeLogo></Header>
          <SubHead>For those who think they are right</SubHead>
            {routes.map(({ path, component: C, handleInputChange, handleSubmit}) => (
              <Route
                path={path}
                render={ (props) => <C {...props}/>}
                handleInputChange={context.handleInputChange} 
                handleSubmit={context.handleSubmit}/>
            ))}
            {/* <Route 
            exact={true}
            path="/" 
            component={Login} 
            handleInputChange={this.handleInputChange} 
            handleSubmit={this.handleSubmit}/>
            <Route 
            path="/signup" 
            component={Signup} 
            handleInputChange={this.handleInputChange} 
            handleSubmit={this.handleSubmit}/> */}
        </Container>
      </Everything>
    );
  }
}
render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
// registerServiceWorker()
