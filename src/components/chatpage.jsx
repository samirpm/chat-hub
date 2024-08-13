import { MoreVert, Send } from "@mui/icons-material";
import { Avatar, Badge, Box, Divider, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import bgimage from '../assets/bg-image.webp';

const ChatPage = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      // Handle sending the message
      console.log('Message sent:', message);
      setMessage(''); // Clear the input field
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#ffffff",
        borderRadius: "10px",
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box display='flex' justifyContent='space-between' margin={1}>
        <Box display="flex" justifyContent='center' alignItems='center' gap={2}>
          <Badge
            color={'success'}
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar sx={{ height: '50px', width: '50px' }} />
          </Badge>
          <Box>
            <Typography variant="h6">Samir</Typography>
            <Typography variant="subtitle2">online</Typography>
          </Box>
        </Box>
        <IconButton sx={{ height: '50px', width: '50px' }}>
           <MoreVert />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${bgimage})`,
        }}
      >
        {/* Add your chat messages or content here */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          padding: 1,
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Type a message"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            '& .MuiOutlinedInput-root': {
              height: '40px', // Adjust the height here
              '& input': {
                padding: '5px 20px', // Adjust the padding here
              },
              '& fieldset': {
                borderColor: '#e0e0e0',
                borderRadius: '20px', // Add border radius here
              },
              '&:hover fieldset': {
                borderColor: '#bdbdbd',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#a0a0a0',
              },
            },
          }}
        />
        <IconButton onClick={handleSend} sx={{ ml: 1 }}>
          <Send sx={{ color: '#007bff' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatPage;
