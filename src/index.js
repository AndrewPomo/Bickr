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
      firstname: 'Andrew',
      email: '',
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

  }

  renderView() {
    const {view} = this.state;
    if (view === 'signup') {
      return <Signup handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
    } else if (view === 'questionnaire') {
      return <Questionnaire name={this.state.firstname} handleSubmit={this.handleSubmit}/>
    } else if (view === 'chat') {
      return <Chat messages={this.state.messages} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
    } /*else {
      this.updateViews(view)
      return <Post postId={view} posts={posts}/>
    }*/
  }

  handleInputChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.dataset.next) {
      this.setState({
        view: e.target.dataset.next
      })
    } else if (this.state.view === 'chat') {
      e.preventDefault();
      const toSend = {
        name: this.state.firstname,
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
