import {  createContext,useContext, useState } from "react";

export const ChatContext = createContext();

export const useChatContext = () => {
    return useContext(ChatContext);
}

export const ChatProvider = ({ children }) => {
    const [chatuser, setChatuser] = useState(JSON.parse(localStorage.getItem('selected-user')) || null);
    const value = {chatuser,setChatuser}
    return <ChatContext.Provider value={value} >{children}</ChatContext.Provider>
};