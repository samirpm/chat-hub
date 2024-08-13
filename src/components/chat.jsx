import { Box, Typography, Avatar, Badge, ButtonBase } from '@mui/material';
import React from 'react';

const messages = [
  {
    name: 'John Doe',
    lastMessage: 'Hello, how are you?',
    online: true,
    lastMessageTime: '2 min ago',
  },
  {
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    online: false,
    lastMessageTime: '10 min ago',
  },
  {
    name: 'Alice Johnson',
    lastMessage: 'Got it, thanks!',
    online: true,
    lastMessageTime: '1 hour ago',
  },
  {
    name: 'John Doe',
    lastMessage: 'Hello, how are you?',
    online: true,
    lastMessageTime: '2 min ago',
  },
  {
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    online: false,
    lastMessageTime: '10 min ago',
  },
  {
    name: 'Alice Johnson',
    lastMessage: 'Got it, thanks!',
    online: true,
    lastMessageTime: '1 hour ago',
  },
  {
    name: 'John Doe',
    lastMessage: 'Hello, how are you?',
    online: true,
    lastMessageTime: '2 min ago',
  },
  {
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    online: false,
    lastMessageTime: '10 min ago',
  },
  {
    name: 'Alice Johnson',
    lastMessage: 'Got it, thanks!',
    online: true,
    lastMessageTime: '1 hour ago',
  },
];

const Chat = () => {
  return (
    <Box>
      <Box>
        {messages.map((msg, index) => (
          <ButtonBase key={index} sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1, width: '100%' }}>
              <Badge
                color={msg.online ? 'success' : 'error'}
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                variant="dot"
              >
                <Avatar>{msg.name.charAt(0)}</Avatar>
              </Badge>
              <Box flex={1} pl={1} textAlign='left'>
                <Typography variant='body1' fontWeight='bold'>{msg.name}</Typography>
                <Typography variant='body2' color='textSecondary'>{msg.lastMessage}</Typography>
              </Box>
              <Typography  variant='body2' color='textSecondary'>{msg.lastMessageTime}</Typography>
            </Box>
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
};

export default Chat;
