const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter information in all fields."
        });
    }

    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Please enter a valid email."
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password needs to be at least 8 characters long."
        });
    }

    res.json({
        message: "Login information accepted." // This is the solution to fix the XSS exploit
        // message: "Welcome back, " + email + "!"
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "JuiceShopLogin.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});