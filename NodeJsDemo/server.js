const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

// In-memory user data storage
const users = [];

// API to register a new user
app.post("/api/register", (req, res) => {
    const { email, username, password } = req.body;

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Add the new user to the in-memory array
    users.push({ email, username, password });
    console.log("User registered successfully:", { email, username, password }); // Debugging
    console.log("Current users array:", users); // Debugging
    res.status(201).json({ message: "User registered successfully" });
});

// API to check login credentials
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    console.log("Login request received:", { username, password }); // Debugging
    console.log("Current users array:", users); // Debugging

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        console.log("Login successful for user:", username); // Debugging
        return res.status(200).json({ success: true, message: "Login successful" });
    } else {
        console.log("Invalid login attempt:", { username, password }); // Debugging
        return res.status(401).json({ success: false, message: "Invalid username or password" });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Node.js Express server is running...");
});

// Example API
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Express Backend!" });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});