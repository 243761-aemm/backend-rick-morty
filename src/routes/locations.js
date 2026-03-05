const { Router } = require('express');
const { getLocations } = require('../controllers/rickMortyController');

const router = Router();

router.get('/', getLocations);

module.exports = router;
