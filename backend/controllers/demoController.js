const asyncHandler = require('express-async-handler');
const Demo = require('../models/demoModel');

//@route GET /api/demo
const getDemo = asyncHandler(async (req,res) => {
    const demo = await Demo.find();
    res.status(200).json(demo);
});

//@route POST /api/demo

const createDemo = asyncHandler(async (req,res) => {
    const {password,result} = req.body;
    const demo = await Demo.create({
        password,
        result
    })
    res.status(201).json(demo);
});

module.exports = {getDemo,createDemo};