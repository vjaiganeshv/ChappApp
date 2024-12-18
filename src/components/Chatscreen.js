import React from 'react'
import Topbar from './Topbar'
import {Messages,NoMessages} from './Messages'
import MessageInput from './MessageInput'
import { useChatContext } from '../context/ChatContext'

const Chatscreen = () => {
  const { chatuser } = useChatContext();
  return (
      <div className='grid h-screen grid-row-14 gap-0'>
        <div className='h-14 bg-blue-600 row-span-1   '>  <Topbar /></div>
      <div className=' mx-6  mt-4 mb-6 bg-gray-900 row-span-11 rounded-xl overflow-auto ' >
        {chatuser?<Messages/>:<NoMessages/>}
          </div>
          <div className='row-span-2 flex bg-blue-300 justify-center align-middle  border-t-8 border-t-black'><MessageInput/></div>
    </div>
  )
}

export default Chatscreen