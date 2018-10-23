import React from 'react'
import Message from './Message'

const MessageList = ({messages, starToggle}) => (
    <div>
        {messages.map(message => <Message sub={message} starToggle={starToggle}/>)}
    </div>

)

export default MessageList
