import React, { useState } from "react";
import { Box, Container, TextField, Typography, Button, Divider, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff, Apple, Google } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Signinapi } from "../../Api/service";
import {toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      Signinapi(values).then((res)=>{
        console.log(res.data);
        if(res.data.statusCode === 401 ){
          toast.error('invalid email or password')
        }else if(res.data.statusCode === 200){
          localStorage.setItem('email', res.data.userdata.email)
          localStorage.setItem('name', res.data.userdata.name)
          localStorage.setItem('id', res.data.userdata.id)
          toast.success('Successfully signed in')
          navigate('/')
        }
      })
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
            Sign In
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
                sx: { borderRadius: 3 },
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
              Sign In
            </LoadingButton>
          </form>
          <Divider sx={{ my: 2 }}>or</Divider>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Button
              startIcon={<Google />}
              fullWidth
              variant="outlined"
              sx={{ textTransform: 'none', maxWidth: '200px', borderRadius: 5, color: 'black', borderColor: 'black' }}
            >
              Google
            </Button>
            <Button
              startIcon={<Apple />}
              fullWidth
              variant="outlined"
              sx={{ textTransform: 'none', maxWidth: '200px', borderRadius: 5, color: 'black', borderColor: 'black' }}
            >
              Apple
            </Button>
          </Box>
          <Typography variant="body2" align="center">
            Don't have an account? <a href="/signup">Sign up</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
