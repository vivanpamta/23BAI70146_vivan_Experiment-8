import React, { useState } from "react";
import axios from "axios";
import { Container, Button, Card, CardContent, Typography } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data);
    } catch {
      alert("Unauthorized");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "80px" }}>
      <Card elevation={5}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            📊 Dashboard
          </Typography>

          <Button
            variant="contained"
            color="success"
            onClick={getData}
            style={{ marginRight: "10px" }}
          >
            Fetch Secure Data
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={logout}
          >
            Logout
          </Button>

          <Typography style={{ marginTop: "20px" }}>
            {data}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dashboard;