import React from 'react';
import { render } from 'react-dom';
const Signup = (props) => {

  return (
    <div>
      <h2>Welcome to Bickr! Complete the form to get started</h2>
      <form onSubmit={props.handleSignup}>
        First name:<br/>
        <input type="text" name="firstname" placeholder="Andrew"/>
        <br/>
        Email:<br/>
        <input type="email" name="email" placeholder="andrew@gmail.com"/>
        <br/><br/>
        <input type="submit" value="Start Bickering"/>
      </form> 
    </div>
  );
}
export default Signup;
