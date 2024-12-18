import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import Convocard from './Convocard'
import { BiLogOut } from "react-icons/bi";
import Logout from './Logout';
import axios from 'axios';

const Sidebar = () => {
  const [chats, setChats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
   axios.get('http://localhost:3001/userreq',{withCredentials: true, credentials: 'include'})
      .then((res) => {
      //console.log(res);
        setChats(res.data);
    })
  },[])

  const filteredChats = chats.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here if needed
  };

  return (
      <div className='p-2 flex flex-col '>
      <div className='py-6 px-4 bg-slate-500 border border-gray-500 rounded-lg'><SearchInput  handleSearchSubmit={handleSearchSubmit} searchTerm={searchTerm} setSearchTerm ={setSearchTerm} /></div>
      <div className='mt-7 bg-white py-6 px-5 border border-gray-500 rounded-lg overflow-auto max-h-[500px]'>
       {filteredChats.map((user)=>(<Convocard key={user._id} user={user} />))}
      </div>
      <div className='mt-7 py-6 px-4  rounded-lg  absolute bottom-2 '>
      <Logout/>
      </div>
    </div>
  )
}

export default Sidebar