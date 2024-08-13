import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const friendRequests = [
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
];

const Requests = () => {
  return (
    <Box>
      {friendRequests.length === 0 ? (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
          <Typography>no requests found</Typography>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {friendRequests.map((request) => (
            <Card
              key={request.id}
              sx={{ maxWidth: 300, padding: 0.5, position: "relative" }}
            >
              <CardContent>
                <Typography variant="body2" sx={{ marginBottom: 4 }}>
                  {request.name} wants to be your friend.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  gap: 1,
                }}
              >
                <IconButton sx={{ bgcolor: "#f4f4f4" }} color="success">
                  <CheckIcon />
                </IconButton>
                <IconButton sx={{ bgcolor: "#f4f4f4" }} color="error">
                  <CloseIcon />
                </IconButton>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Requests;
