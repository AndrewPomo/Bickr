import React from 'react';
import { render } from 'react-dom';
import Signup from './signup'
class App extends React.Component {
render() {
    return (
      <div>
        Welcome to Bickr! Sign up to get started
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
