import React from 'react'
import Message from './Message'

const MessageList = ({messages, starToggle, selectToggle}) => {
  const displayMessages = messages.map(message => {
    return <Message sub={message}
                    starred={message.starred}
                    selected={message.selected}
                    labels={message.labels}
                    id={message.id}
                    starToggle={starToggle}
                    selectToggle={selectToggle}
                    read={message.read}/>
  })
  return (
    <div>
        {displayMessages}
    </div>
  )
}


export default MessageList
