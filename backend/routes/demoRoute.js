const express = require('express');
const router = express.Router();
const {getDemo,createDemo} = require('../controllers/demoController');

router.route('/').get(getDemo);
router.route('/').post(createDemo);

module.exports=router;