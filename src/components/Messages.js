import React, { useEffect } from 'react'
import MessageCard from './MessageCard'
import { useChatContext } from '../context/ChatContext'
import { useAuthContext } from '../context/AuthContext'
import axios, { all } from 'axios'
import { useMessageContext } from '../context/MessageContext'
import { useSocketContext } from '../context/SocketContext'
import { useListenMessages } from '../hooks/listenMessages';

export const Messages = () => {
  const { authuser } = useAuthContext();
  const { chatuser } = useChatContext();
  const { allmessage, setAllmessage } = useMessageContext();
  useEffect(() => {
    // Check if chatuser._id is defined before making the request
    if (chatuser?._id) {
      axios.get(`http://localhost:3001/user/${chatuser._id}`, { withCredentials: true })
        .then((res) => {
          //console.log(res); // Log the response for debugging
          // Store only the relevant data in local storage
          const dataa = res.data
          localStorage.setItem('user-messages', JSON.stringify(dataa))
          setAllmessage(res.data);
          
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, [chatuser?._id, setAllmessage]);
  
  useListenMessages();
  
    return (
      <div className='m-4'>
        {

          allmessage.length > 0  ? allmessage.map((mesdata) => {
            return <MessageCard key={mesdata._id} mesdata={mesdata} chatuser={chatuser} authuser={authuser} />
          }) : <p className='text-white font-semibold text-2xl p-14 ml-9'>No messages found !! Start a Conversation with : {chatuser.username }</p>
        }
      </div>
    )
  }


export const NoMessages = () => {
  const { authuser } = useAuthContext();
  return (
    <div className='m-4  flex justify-center align-middle   '>
      {authuser ? <p className='font-semibold text-2xl pt-20 text-white'>Welcome {authuser.username} Select a Chat to start Messaging </p> :
      null}
     </div>
  )
}

