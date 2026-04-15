import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Card, CardContent, Typography } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password
      });

      sessionStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Card elevation={5}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            🔐 Secure Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={login}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;