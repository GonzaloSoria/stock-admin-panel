const app = require('../index');
const { Router } = require('express');
const router = Router();
const Item = require('../models/Item');

router.get('/' , async (req, res) => {
    const items = await Item.find();
    res.json(items);
})

router.post('/' , async (req, res) => {
    const { name, price, stock, img } = req.body;
    const new_item = new Item({
        name,
        price,
        stock,
        img,
    });
    await new_item.save();
});

module.exports = router;