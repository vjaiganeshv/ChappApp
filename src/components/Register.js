import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState('');

  const {  setAuthuser } = useAuthContext();

  const submitRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { fullname ,username, password },{withCredentials: true, credentials: 'include'})
      .then((result) => {
        console.log(result);
        const userdata = result.data;
        localStorage.setItem("chat-user",JSON.stringify(userdata));
        setAuthuser(userdata.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-blue-100 flex items-center h-screen ">
      
      <form className="w-64 mx-auto mb-9" onSubmit={submitRegister}>
        <h1 className="pl-12 py-2 text-xl font-bold"> PLEASE REGISTER  </h1>
      <input
          type="text"
          placeholder="fullname"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          className="block border border-gray-400 rounded-lg p-1 w-full mb-2 "
        ></input>
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
        <Link to="/" className="pl-10 mt-2">Already member? SignIn</Link>
      </form>
    </div>
  );
};

export default Register;
