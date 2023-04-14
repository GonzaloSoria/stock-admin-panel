const { Schema, model } = require('mongoose');

const item_schema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    img: String,
})

module.exports = model('Item', item_schema);