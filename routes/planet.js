const express = require('express');
const router = express.Router();

// Require controller modules.
const planetController = require('../controllers/planet')

router.get('/', planetController.index);

router.get('/:id', planetController.searchById);

router.post('/', planetController.insert);

router.put('/:id', planetController.update);

router.delete('/:id', planetController.delete);

module.exports = router;