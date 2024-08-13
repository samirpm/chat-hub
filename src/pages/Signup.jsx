import React, { useState } from "react";
import { Box, Container, TextField, Typography, Button, Divider, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff, Apple,Google } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Signupapi } from "../../Api/service";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      Signupapi(values).then(()=>{
        toast.success('Successfully signed up')
        navigate('/signin')
      }).catch(err => {
        toast.error('something went wrong , please try again')
      });
    },
  });

  return (
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 8,
            boxShadow: 3,
            p: 4,
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h5"
            textAlign="left"
            fontWeight="bold"
            gutterBottom
          >
            Sign Up
          </Typography>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <TextField
            InputProps={{ sx: { borderRadius: 3 } }}
              fullWidth
              size="small"
              margin="dense"
              variant="outlined"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              FormHelperTextProps={{ sx: { mt: 0 } }}
            />
            <TextField
            InputProps={{ sx: { borderRadius: 3 } }}
              fullWidth
              size="small"
              margin="dense"
              variant="outlined"
              label="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              FormHelperTextProps={{ sx: { mt: 0 } }}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="outlined"
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              FormHelperTextProps={{ sx: { mt: 0 } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx:{borderRadius:3}
              }}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="outlined"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              FormHelperTextProps={{ sx: { mt: 0 } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx:{borderRadius:3}
              }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                borderRadius: 3,
                backgroundColor: "#212B36",
                "&:hover": {
                  backgroundColor: "#212B36",
                },
              }}
            >
              Sign Up
            </LoadingButton>
          </form>
          <Divider sx={{ my: 2}}>or</Divider>
          <Box sx={{ display: 'flex', gap: 2 ,mb:2}}>
            <Button
              startIcon={<Google />}
              fullWidth
              variant="outlined"
              sx={{ textTransform:'none',maxWidth:'200px',borderRadius:5,color:'black',borderColor:'black'}}
            >
              Google
            </Button>
            <Button
              startIcon={<Apple/>}
              fullWidth
              variant="outlined"
              sx={{ textTransform:'none',maxWidth:'200px',borderRadius:5,color:'black',borderColor:'black'}}
            >
              Apple 
            </Button>
          </Box>
          <Typography variant="body2" align="center">
            Already have an account? <a href="/signin">Log in</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
