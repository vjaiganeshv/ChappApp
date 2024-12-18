
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Navigate,Route,Routes } from "react-router-dom";
import {  useAuthContext } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import { MessageProvider } from "./context/MessageContext";




function App() {
  const {authuser} = useAuthContext();
  return(
   
      
    <Routes>
        <Route path="/register" element={authuser?<Navigate to="/home"/>:<Register/>}></Route>
     <Route path="/home" element={authuser?<ChatProvider><MessageProvider><Home /></MessageProvider></ChatProvider>:<Navigate to='/'/>}></Route>
        <Route path="/" element={authuser?<Navigate to='/home'/>:<Login/>}></Route> 
      </Routes>
      
    )
}

export default App;
