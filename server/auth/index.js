var express = require('express');
var controller = require('./controller');
var router = new express.Router();

router.post('/signup', controller.signup);

module.exports = router;