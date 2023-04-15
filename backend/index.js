require('dotenv').config();
const express = require('express');
const cors = require('cors');
const init_db = require('./database');
const app = express();
const routes = require('./routes/routes');
const PORT = 4000;

/*** middlewares ***/

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('The server is running');
})

app.listen(PORT, (req, res) => {
    console.log(`The server is running at http://localhost:${PORT}/`);
})

/*** DB init ***/

init_db();

/*** API route ***/

app.use('/api/items', routes);

