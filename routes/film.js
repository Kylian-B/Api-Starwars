const express = require('express');
const router = express.Router();

// Require controller modules.
const filmController = require('../controllers/film')

router.get('/', filmController.index);

router.get('/:id', filmController.searchById);

router.post('/', filmController.insert);

router.put('/:id', filmController.update);

router.delete('/:id', filmController.delete);

module.exports = router;