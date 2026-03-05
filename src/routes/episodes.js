const { Router } = require('express');
const { getEpisodes } = require('../controllers/rickMortyController');

const router = Router();

router.get('/', getEpisodes);

module.exports = router;
