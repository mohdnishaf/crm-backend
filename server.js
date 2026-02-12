
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
