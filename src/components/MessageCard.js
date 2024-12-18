import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useChatContext } from '../context/ChatContext';
import { extractTime } from '../assets/formattedTime';


const MessageCard = ({ mesdata, chatuser ,authuser }) => {
  if (!mesdata || !chatuser || !authuser ) {
    return null; // Avoid rendering if data is missing
   }
  const time = extractTime(mesdata.createdAt);
  const fromMe = mesdata.senderId !== chatuser._id;
  const validation = fromMe ? 'chat-end' : 'chat-start';
   const profile = fromMe? (authuser.username?.[0] || 'U').toUpperCase() 
    : (chatuser.username?.[0] || 'U').toUpperCase();


  return (
      <div>
          <div className={`chat ${validation} p-4`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full bg-white">
    <span className="text-2xl font-bold pl-3 pt-5">{profile}</span>
    </div>
  </div>
        <div className="chat-bubble">{mesdata.message}</div>
        <div className="chat-footer opacity-50 text-white">{time}</div>
      </div>
    </div>
  )
}

export default MessageCard