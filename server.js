<<<<<<< HEAD

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const vacationRoutes = require('./routes/vacationRoutes');
const projectRoutes = require('./routes/ProjectRoutes');
const setupSwagger = require('./config/swagger');


const app = express();

app.use(cors());
app.use(express.json());

setupSwagger(app);

// MongoDB connect
mongoose.connect('mongodb://127.0.0.1:27017/projectdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/vacations', vacationRoutes);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
=======
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


>>>>>>> 34bbefa9d746eb0963146424b3cf50b5c9b58f07
