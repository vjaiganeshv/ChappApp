import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const { setAuthuser } = useAuthContext();
  
    const submitRegister = (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:3001/login", { username, password },{withCredentials: true})
        .then((result) => {
          console.log(result);
          const userdata = result.data;
          localStorage.setItem("chat-user",JSON.stringify(userdata));
          setAuthuser(userdata);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <div className="bg-blue-100 flex items-center h-screen ">
      
      <form className="w-64 mx-auto mb-9" onSubmit={submitRegister}>
        <h1 className="pl-12 py-2 text-xl font-bold"> PLEASE SIGNIN  </h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="block border border-gray-400 rounded-lg p-1 w-full mb-2 "
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="block border border-gray-400 rounded-lg p-1 w-full mb-2 "
        ></input>
        <button
          type="submit"
          className="bg-blue-500 text-white p-1 w-full  rounded-lg"
        >
          Register
        </button>
        <Link to="/register" className="pl-10 mt-2">New member? Register</Link>
      </form>
    </div>
  )
}

export default Login