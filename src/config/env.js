require('dotenv').config();

const config = {
  port: process.env.PORT || 4000,
  rickMortyBaseUrl: process.env.RICKMORTY_BASE_URL || 'https://rickandmortyapi.com/api',
  frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://localhost:3000',
};

module.exports = config;