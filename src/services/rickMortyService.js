const axios = require('axios');
const { rickMortyBaseUrl } = require('../config/env');

const apiClient = axios.create({
  baseURL: rickMortyBaseUrl,
  timeout: 8000,
});



async function fetchCharacters(params = {}) {
  const { data } = await apiClient.get('/character', { params });
  return data;
}

async function fetchCharacterById(id) {
  const { data } = await apiClient.get(`/character/${id}`);
  return data;
}



async function fetchEpisodes(params = {}) {
  const { data } = await apiClient.get('/episode', { params });
  return data;
}



async function fetchLocations(params = {}) {
  const { data } = await apiClient.get('/location', { params });
  return data;
}

module.exports = {
  fetchCharacters,
  fetchCharacterById,
  fetchEpisodes,
  fetchLocations,
};
