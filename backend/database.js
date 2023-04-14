require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.DB_URI;

const main = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Database connected succesfully')
    } catch (err) {
        console.log(err)
    }
}

module.exports = main;