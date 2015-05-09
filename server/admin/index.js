var express = require('express');
var controller = require('./controller');
var router = new express.Router();

router.get('/users', controller.users);
router.get('/users/:id', controller.show);
router.post('/users/create', controller.createUser);
router.put('/users/:id/edit', controller.edit);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;