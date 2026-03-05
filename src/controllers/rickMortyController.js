const {
  fetchCharacters,
  fetchCharacterById,
  fetchEpisodes,
  fetchLocations,
} = require('../services/rickMortyService');



function handleError(res, error) {
  const status  = error.response?.status  || 500;
  const message = error.response?.data?.error || 'Error interno del servidor';
  res.status(status).json({ error: message });
}



async function getCharacters(req, res) {
  try {
    const { page = 1, name, status, species, gender } = req.query;
    const params = { page };
    if (name)    params.name    = name;
    if (status)  params.status  = status;
    if (species) params.species = species;
    if (gender)  params.gender  = gender;

    const data = await fetchCharacters(params);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
}

async function getCharacterById(req, res) {
  try {
    const data = await fetchCharacterById(req.params.id);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
}



async function getEpisodes(req, res) {
  try {
    const { page = 1, name, episode } = req.query;
    const params = { page };
    if (name)    params.name    = name;
    if (episode) params.episode = episode;

    const data = await fetchEpisodes(params);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
}



async function getLocations(req, res) {
  try {
    const { page = 1, name, type, dimension } = req.query;
    const params = { page };
    if (name)      params.name      = name;
    if (type)      params.type      = type;
    if (dimension) params.dimension = dimension;

    const data = await fetchLocations(params);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  getCharacters,
  getCharacterById,
  getEpisodes,
  getLocations,
};
