const express = require('express');
const router = express.Router();

// Require controller modules.
const peopleController = require('../controllers/people')

router.get('/', peopleController.index);

router.get('/:id', peopleController.searchById);

router.post('/', peopleController.insert);

router.put('/:id', peopleController.update);

router.delete('/:id', peopleController.delete);

module.exports = router;