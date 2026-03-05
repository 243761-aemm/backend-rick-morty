const { Router } = require('express');
const { getCharacters, getCharacterById } = require('../controllers/rickMortyController');

const router = Router();

router.get('/',    getCharacters);
router.get('/:id', getCharacterById);

module.exports = router;