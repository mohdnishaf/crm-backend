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

// Connect DB first, then start server
connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  });