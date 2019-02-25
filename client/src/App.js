import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {content: "Hello"}
   componentDidMount()
   {
      fetch("/users")
        .then(res => res.json())
          .then(users=>this.setState({content:"Baby"}))
   }

  render() {
    return (
      <div className="App">
      {this.state.content}
      </div>
    );
  }

}

export default App;
