import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

const SendFriendRequestModal = ({ open, handleClose }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          borderRadius: "15px", // Added border-radius for the dialog
        },
      }}
    >
      <DialogTitle
        variant="h5"
        style={{
            fontWeight: "bolder",
          borderTopLeftRadius: "25px", // Consistent with dialog border-radius
          borderTopRightRadius: "25px", // Consistent with dialog border-radius
        }}
      >
        Send Friend Request
      </DialogTitle>
      <Divider />
      <DialogContent style={{ padding: "20px 30px" }}>
        <TextField
          autoFocus
          margin="dense"
          label="Friend's Email"
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{
            marginBottom: "20px",
          }}
          InputProps={{
            style: {
              borderRadius: "10px", // Added border-radius for the input field
            },
          }}
        />
      </DialogContent>
      <DialogActions style={{ padding: "10px 30px 20px" }}>
        <Button
          variant="contained"
          onClick={handleClose}
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            textTransform: "none",  
            borderRadius: "20px", // Added border-radius for the Cancel button
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "#2c3e50",
            color: "#fff",
            textTransform: "none",
            borderRadius: "20px", // Added border-radius for the Send Request button
          }}
          onClick={() => formik.handleSubmit()}
        >
          Send Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SendFriendRequestModal;
