const charactersRouter = require('./characters');
const episodesRouter   = require('./episodes');
const locationsRouter  = require('./locations');

function registerRoutes(app) {
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use('/api/characters', charactersRouter);
  app.use('/api/episodes',   episodesRouter);
  app.use('/api/locations',  locationsRouter);

  
  app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  });
}

module.exports = registerRoutes;