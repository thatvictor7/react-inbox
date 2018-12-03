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
      apiMessages: [],
      selected: []
    }
  }

  markRead = (input) => {
    fetch('http://localhost:8082/api/messages', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messageIds: [input],
        command: 'read'
      })
    }).then(res => res.json())
    .then(data => {
      // console.log(input, command);
      this.setState({
        apiMessages: data
      })
      console.log(data);
    })
  }

  starToggle = (messageId) => {
    fetch('http://localhost:8082/api/messages', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messageIds: [messageId],
        command: 'star'
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data, messageId);
      this.setState({
        apiMessages: data
      })
    })
  }

  selectToggle = (input) => {
    fetch('http://localhost:8082/api/messages', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messageIds: [input],
        command: 'select'
      })
    }).then(res => res.json())
    .then(data => {
      this.setState({
        apiMessages: data
      })
    })
  }

  select = () => {
    this.isSelected()
    this.state.selected.map(id => {
      this.markRead(id)
    })
  }

  isSelected = () => {
    this.state.apiMessages.map(message => {
      if (message.selected) {
        this.setState({ selected: this.state.selected.push(message.id) })
      }
    })
    console.log(this.state.selected);
  }



  componentDidMount() {
    fetch('http://localhost:8082/api/messages')
    .then(res => res.json())
    .then(data => {
      this.displayMessages(data)
    }
    )
  }

  displayMessages = (input) => {
    this.setState({apiMessages: input})
  }

  render() {
    return (
      <div>
        <Toolbar select={this.select}/>
        <MessageList  messages={this.state.apiMessages}
                      starToggle={this.starToggle}
                      toggle={this.toggle}
                      selectToggle={this.selectToggle}/>
      </div>
    )
  }
}

export default App
