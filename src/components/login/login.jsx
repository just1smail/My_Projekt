import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, Button, Container, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axiosRequest/axiosRequest";
import { saveToken } from "../../utils/token/token";

const Login = () => {
  let navigate = useNavigate();

  async function login(values, { setSubmitting, setErrors }) {
    try {
      const { data } = await axiosRequest.post("Account/login", values);
      if (data.statusCode === 200) {
        saveToken(data.data);
        navigate("/");
      } else {
        setErrors({ server: "Invalid username or password" });
      }
    } catch (error) {
      setErrors({ server: "An error occurred. Please try again later." });
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  }

  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(public/food-table-b3urk3o4im0a9kk6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container component={Paper} maxWidth="xs" sx={{ p: 4, opacity: 0.9, width:"500px", height:"350px", marginLeft:"200px", backgroundColor:"lightgrey"}}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{ userName: "", password: "" }}
          validate={validate}
          onSubmit={login}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="userName"
                  type="text"
                  label="Username"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="userName" />}
                  error={Boolean(errors.userName)}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="password" />}
                  error={Boolean(errors.password)}
                />
              </Box>
              {errors.server && (
                <Typography color="error" gutterBottom>
                  {errors.server}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{ mt: 2 }}
              >
                {isSubmitting ? "Logging in..." : "Log In"}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Login;
