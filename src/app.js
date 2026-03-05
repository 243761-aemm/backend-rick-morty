const express       = require('express');
const corsMiddleware = require('./middleware/cors');
const registerRoutes = require('./routes/index');

function createApp() {
  const app = express();

  app.use(corsMiddleware);
  app.use(express.json());

  registerRoutes(app);

  return app;
}

module.exports = createApp;
