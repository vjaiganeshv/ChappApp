import {  createContext,useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";



export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [isOnline, setIsOnline] = useState([]);
    const { authuser } = useAuthContext();
    const value = { socket,isOnline };
     
    useEffect(() => {
        if (authuser) {
            const socket = io('http://localhost:3001', {
                query: {
                    userId: authuser.id,
                },
                transports: ['websocket'],
            });
            setSocket(socket);
            socket.on('getOnlineUsers', (users) => {
                setIsOnline(users);
            })
            return () => {
                if (socket) {
                    socket.close();
                }
            }
        }
        else if (socket) {
            socket.close();
            setSocket(null);
        }
    }, [authuser]);


    return <SocketContext.Provider value={value} >{children}</SocketContext.Provider>
};