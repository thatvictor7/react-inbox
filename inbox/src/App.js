import React, { Component } from 'react';

import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Message from './components/Message'
// import NewMessage from './components/NewMessage'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      apiMessages: []
    }
  }

  starToggle = () => {
    // console.log('heyyy');
  }

  fetching = () => {
    fetch('http://localhost:8082/api/messages', {
      method: "PATCH",
      body: JSON.strigify(),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


  componentDidMount() {
    fetch('http://localhost:8082/api/messages')
    .then(res => res.json())
    .then(data => this.displayMessages(data))
  }

  displayMessages = (input) => {
    this.setState({apiMessages: input})
  }

  render() {
    return (
      <div>
        <Toolbar />
        <MessageList  messages={this.state.apiMessages} starToggle={this.starToggle}/>
      </div>
    )
  }
}

export default App;
