const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import initWebRouter from './routes/web.js'
import connectDB from './config/connectDB.js'
require('dotenv').config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRouter(app)
// Định nghĩa các route ở đây

connectDB()

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
