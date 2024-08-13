import { Box } from '@mui/material'
import React from 'react'
import ChatCard from '../components/ChatCard'
import ChatPage from '../components/chatpage'
import io from 'socket.io-client';

const HomePage = () => {
  const socket = io('http://localhost:7000');
  console.log(socket);
  return (
    <Box sx={{display:'flex',backgroundColor:'#f2f2f2',height:'97vh',padding:1,gap:2}}>
        <ChatCard/>
        <ChatPage/>
    </Box>
  )
}

export default HomePage