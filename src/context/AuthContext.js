import {  createContext,useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [authuser, setAuthuser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);
    const value = {authuser,setAuthuser}
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
};