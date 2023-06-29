const express = require('express');
const router = express.Router();

// Require controller modules.
const vehicleController = require('../controllers/vehicle')

router.get('/', vehicleController.index);

router.get('/:id', vehicleController.searchById);

router.post('/', vehicleController.insert);

router.put('/:id', vehicleController.update);

router.delete('/:id', vehicleController.delete);

module.exports = router;