import React from "react";
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
      <a href="src/check.html">Press</a>
        <form>
          <input placeholder="name" type="name" />
          <input placeholder="name" type="email" />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        
      </div>
    );
  }
}

export default Contact;
