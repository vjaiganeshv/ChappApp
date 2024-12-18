import axios from 'axios';
import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import { useChatContext } from '../context/ChatContext';



const Logout = () => {
  const { setAuthuser } = useAuthContext();
  const { setChatuser } = useChatContext();
    const handleLogout = async () => {
        try {
             await axios.post("http://localhost:3001/logout",{withCredentials: true, credentials: 'include'});
          localStorage.removeItem('chat-user');
          localStorage.removeItem('selected-user');
          setAuthuser(null);
          setChatuser(null);
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };
  return (
    <div><button type='submit' onClick={handleLogout} className='bg-slate-100  rounded p-2 border border-gray-500'>LogOut</button></div>
  )
}

export default Logout