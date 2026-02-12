require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// Middleware
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/employees", require("./routes/employee.routes"));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// calendar 
app.use("/api/calendar", require("./routes/calendar.routes"));

// CORS
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);


