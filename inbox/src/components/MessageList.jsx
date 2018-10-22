import React from 'react'
import Message from './Message'

const MessageList = (props) => (
    <div>
        {props.messages.map(message => <Message sub={message}/>)}
    </div>

)

export default MessageList
