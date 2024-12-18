import React, { useState } from 'react'
import { useChatContext } from '../context/ChatContext'
import axios from 'axios';
import { useMessageContext } from '../context/MessageContext';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { chatuser } = useChatContext();
  const { allmessage, setAllmessage } = useMessageContext();
  const handleSubmit =  async (e) => {
    e.preventDefault(); 
    if (message === '') {
      return;
    }
    axios.post(`http://localhost:3001/sendmessage/${chatuser._id}`, { message }, { withCredentials: true, credentials: 'include' })
      .then((res) => {
        const lastmessage = res.data;
        console.log(lastmessage);
        setAllmessage([...allmessage,lastmessage])
        setMessage('');
      })
   
  }
  return (
    
    <form className='flex justify-center items-center w-2/3 m-5 rounded-lg' onSubmit={handleSubmit}>
    <input type='text' placeholder='type message'value={message} onChange={(e)=>setMessage(e.target.value)} className='rounded-l-lg w-2/3 p-2 border border-black'></input>
    <button type='submit' className='bg-slate-400  rounded-r-lg p-2 border border-black'>Send</button>
        
  </form>
  )
}

export default MessageInput