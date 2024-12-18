import React, { useState } from 'react'
import { useChatContext } from '../context/ChatContext';
import { useSocketContext } from '../context/SocketContext';

const Convocard = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { chatuser,setChatuser } = useChatContext();
  const { isOnline } = useSocketContext();
  if (!user) {
    return null; // Optionally return a placeholder or error message
  }

  const userName = user.username;
  const onlineUser = isOnline.includes(user._id);

  const handleClick = () => {
    //console.log("Selected user:", user);
    localStorage.setItem('selected-user', JSON.stringify(user));
    setChatuser(user);
  };

  return (
    <div className={`border bg-slate-200 border-black m-2 rounded-xl p-2 hover:text-white hover:bg-slate-500 flex gap-4 `}
   onClick={handleClick}
    >
          <div className='flex gap-4'>
        <div className={`avatar ${onlineUser? 'online': ''} placeholder`}>
          <div className="bg-neutral text-neutral-content h-11 w-11 rounded-full"
          >
            <span className="text-xl">{ userName[0].toUpperCase()}</span>
  </div>
             </div>
        <p className='text-xl mt-1'
          
        
        >{userName} 
          
        </p>

    </div></div>
  )
}

export default Convocard