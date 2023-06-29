const express = require('express');
const router = express.Router();

// Require controller modules.
const specieController = require('../controllers/specie')

router.get('/', specieController.index);

router.get('/:id', specieController.searchById);

router.post('/', specieController.insert);

router.put('/:id', specieController.update);

router.delete('/:id', specieController.delete);

module.exports = router;