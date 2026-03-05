const cors = require('cors');
const { frontendOrigin } = require('../config/env');

const corsMiddleware = cors({
  origin: frontendOrigin,
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
});

module.exports = corsMiddleware;
