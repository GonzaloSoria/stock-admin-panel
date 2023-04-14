require('dotenv').config();
const express = require('express');
const cors = require('cors');
const init_db = require('./database');
const PORT = 4000;
const app = express();
const routes = require('./routes/routes');


/*** middlewares ***/
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('The server is running');
})

app.listen(PORT, (req, res) => {
    console.log(`The server is running at http://localhost:${PORT}/`);
})

init_db();

app.use('/items', routes)



module.exports = app;


