import React from 'react'
import { useChatContext } from '../context/ChatContext'

const Topbar = () => {
  const { chatuser } = useChatContext();
  return (
      <div className=' flex items-center justify-center mt-2 p-1 '>
      {chatuser ? <p className='text-slate-100 font-semibold text-xl'>Message To : {chatuser.username}</p>
      : <p  className='text-slate-100 font-semibold text-xl'>Select an User</p> }
    </div>
  )
}

export default Topbar