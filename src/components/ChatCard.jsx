import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Button,
} from "@mui/material";
import {
  GroupAdd,
  PersonAdd,
  Search,
  Settings,
  Logout,
  Edit,
  Close,
} from "@mui/icons-material";
import Chat from "./chat";
import Requests from "./requests";
import Logo from "../assets/logo/chatshub.png";
import SendFriendRequestModal from "../modals/FriendRequestModal";

const ChatCard = () => {
  const [alignment, setAlignment] = useState("chat");
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      sx={{
        width: "400px",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          padding: "10px",
          width: "100%",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <img
            style={{ width: "50px", height: "50px", borderRadius: "10px" }}
            src={Logo}
            alt=""
          />
          <Typography
            sx={{
              background:
                "linear-gradient(90deg, #4e4e50 0%, #6f6f70 50%, #9e9e9f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variant="h5"
            fontWeight={900}
          >
            Chat Hub
          </Typography>
        </Box>
        <IconButton sx={{ marginRight: 2 }} onClick={toggleDrawer(true)}>
          <Settings />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            width: "90%",
            backgroundColor: "#f2f2f2",
            borderRadius: "15px",
            paddingInline: 1,
          }}
        >
          <ToggleButton
            sx={{
              width: "50%",
              borderRadius: "10px",
              padding: 0,
              marginBlock: 1,
              textTransform: "none",
              border: "none",
              backgroundColor: "#f2f2f2",
              color: "grey",
              "&.Mui-selected": {
                backgroundColor: "#ffffff",
                color: "skyblue",
                borderRadius: "15px",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "inherit",
                borderRadius: "15px",
              },
            }}
            value="chat"
          >
            Chats
          </ToggleButton>
          <ToggleButton
            sx={{
              width: "50%",
              borderRadius: "10px",
              padding: 0,
              marginBlock: 1,
              textTransform: "none",
              border: "none",
              backgroundColor: "#f2f2f2",
              color: "grey",
              "&.Mui-selected": {
                backgroundColor: "#ffffff",
                color: "skyblue",
                borderRadius: "15px",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "inherit",
                borderRadius: "15px",
              },
            }}
            value="requests"
          >
            Requests
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {alignment === "chat" && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#4e4e50", fontSize: 20 }} />
                </InputAdornment>
              ),
              sx: {
                height: 35, // Adjusts the height of the input field
                padding: 2,
                margin: "10px 5px",
                width: "97%",
                fontSize: 14, // Smaller text size
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#b0bec5",
                  borderRadius: "15px",
                },
              },
            }}
          />
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingInline={1}
      >
        <Typography variant="body1" fontWeight="bold">
          {alignment === "chat" ? "Messages" : "Requests"}
        </Typography>
        {alignment === "chat" ? (
          <IconButton>
            <GroupAdd />
          </IconButton>
        ) : (
          <IconButton onClick={handleClickOpen}>
            <PersonAdd />
          </IconButton>
        )}
      </Box>
      <Divider />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#f2f2f2",
        }}
      >
        {alignment === "chat" ? <Chat /> : <Requests />}
      </Box>

      {/* Modal for Sending Friend Request */}
      <SendFriendRequestModal open={open} handleClose={handleClose} />

      {/* Drawer for Account Settings */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "#fff",
            borderRadius: "10px 0 0 10px",          },
        }}
      >
        <List sx={{margin:'10px'}}>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography variant="h6">Account Details</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Box>
          <ListItem sx={{ flexDirection: "column", alignItems: "center" }}>
            <ListItemAvatar>
              <Avatar sx={{ width: 80, height: 80 }} />
            </ListItemAvatar>
            <ListItemText
              primary="John Doe" // Replace with the user's name
              secondary="johndoe@example.com" // Replace with the user's email
              primaryTypographyProps={{ fontWeight: "bold", mt: 1 ,fontSize:'20px'}}
              secondaryTypographyProps={{ color: "textSecondary" ,fontSize:'16px'}}
              sx={{ textAlign: "center" }}
            />
            <IconButton edge="end" sx={{ alignSelf: "flex-end" }}>
              <Edit />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Dark Mode" />
            <ListItemSecondaryAction>
              <Switch checked={darkMode} onChange={handleDarkModeToggle} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Box mt='auto'>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Logout />}
            sx={{
              width: '92%',
              margin:'10px',
              backgroundColor: "#2c3e50",
              color: "#fff",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#1f2a36",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ChatCard;
