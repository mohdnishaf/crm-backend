require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// DB
connectDB();

// Routes
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/calendar", require("./routes/calendar.routes"));
app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/vacations", require("./routes/vacation.routes"));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Test Route
app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


  
