import React from 'react'
import Sidebar from './Sidebar'
import Chatscreen from './Chatscreen'

const Home = () => {
  return (
      <div className='flex h-screen'>
          <div className='w-1/4 h-screen bg-slate-400 border border-r-gray-700 border-r-2 '>
              <Sidebar/>
      </div>
      
       
      <div className='w-3/4 h-screen overflow-auto'>
        
        <Chatscreen/>
      </div>
      
    </div>
  )
}

export default Home