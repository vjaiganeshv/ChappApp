import { useEffect } from "react";
import { useMessageContext } from "../context/MessageContext";
import { useSocketContext } from '../context/SocketContext';
export const useListenMessages = () => {

    const {  setAllmessage } = useMessageContext();
    const { socket } = useSocketContext();
    useEffect(() => {
         
        const handleNewMessage = (newMessage) => {
            setAllmessage(prevMessages => [...prevMessages, newMessage]);
        };
        socket?.on('new-message', handleNewMessage);
        return () => socket?.off('new-message',handleNewMessage);
    }, [socket, setAllmessage]);
}