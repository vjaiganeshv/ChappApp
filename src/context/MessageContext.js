import {  createContext,useContext, useState } from "react";

export const MessageContext = createContext();

export const useMessageContext = () => {
    return useContext(MessageContext);
}

export const MessageProvider = ({ children }) => {
    const [allmessage, setAllmessage] = useState(JSON.parse(localStorage.getItem('user-messages') || null));
    const value = {allmessage,setAllmessage}
    return <MessageContext.Provider value={value} >{children}</MessageContext.Provider>
};