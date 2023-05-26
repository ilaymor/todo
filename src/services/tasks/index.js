const express = require('express');
require('express-async-errors');
const dotenv = require('dotenv').config();
const routes = require('./routes/tasksRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');

connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

app.use('/api/tasks', routes)

app.use(errorHandler)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`))