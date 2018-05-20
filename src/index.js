import React from 'react';
import { render } from 'react-dom';
import Signup from './components/signup'
import Questionnaire from './components/questionnaire'
import Chat from './components/chat'

class App extends React.Component {

  constructor() {
    super();
    this.state= {
      view:'signup',
    }

    this.handleSignup = this.handleSignup.bind(this);
    this.handleQuestionnaire = this.handleQuestionnaire.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  renderView() {
    const {view} = this.state;
    console.log(view)
    if (view === 'signup') {
      // return <Signup handleClick={(e) => this.changeView(e.target.dataset.view)}/>
      return <Signup handleSignup={this.handleSignup}/>
    } else if (view === 'questionnaire') {
      return <Questionnaire handleQuestionnaire={this.handleQuestionnaire}/>
    } else if (view === 'chat') {
      return <Chat send={this.send} fetch={this.fetch}/>
    } else {
      this.updateViews(view)
      return <Post postId={view} posts={posts}/>
    }
  }

  sendMessage() {

  }

  fetchMessages() {

  }

  handleSignup(e) {
    e.preventDefault();
    this.setState({
      view: 'questionnaire'
    });
  }

  handleQuestionnaire(e) {
    console.log('starting chat')
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
      <div className="main">
        {this.renderView()}
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
