const express = require('express');
const router = express.Router();

// Require controller modules.
const starshipController = require('../controllers/starship')

router.get('/', starshipController.index);

router.get('/:id', starshipController.searchById);

router.post('/', starshipController.insert);

router.put('/:id', starshipController.update);

router.delete('/:id', starshipController.delete);

module.exports = router;