import React from 'react'
import Message from './Message'

const MessageList = ({messages, starToggle}) => {
  const displayMessages = messages.map(message => {
    return <Message sub={message}
                    starred={message.starred}
                    selected={message.selected}
                    read={message.read}/>
  })
  return (
    <div>
        {displayMessages}
    </div>
  )
}


export default MessageList
