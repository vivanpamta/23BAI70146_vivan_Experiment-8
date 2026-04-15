const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "mysecretkey";

// Dummy user
const USER = {
  username: "admin",
  password: "1234"
};

// 🔐 Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// 🔒 Protected API
app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(403).json("No token");

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json("Invalid token");

    res.json("✅ Protected data accessed!");
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));