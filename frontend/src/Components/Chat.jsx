import React from 'react'
import Message from './Message'
import Input from './Input'

const Chat = () => {
    const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Message/>
      <Input/>
    </div>
  )
}

export default Chat