const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
// Default configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/payroll", payrollRoutes);
app.get("/", (req, res)=>{
    res.send("api is running")
})


module.exports = app;
