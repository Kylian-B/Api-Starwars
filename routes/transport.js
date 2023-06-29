const express = require('express');
const router = express.Router();

// Require controller modules.
const transportController = require('../controllers/transport')

router.get('/', transportController.index);

router.get('/:id', transportController.searchById);

router.post('/', transportController.insert);

router.put('/:id', transportController.update);

router.delete('/:id', transportController.delete);

module.exports = router;