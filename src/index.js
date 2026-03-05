const createApp = require('./app');
const { port, frontendOrigin, rickMortyBaseUrl } = require('./config/env');

const app = createApp();

app.listen(port, () => {
  console.log(` Backend SOA escuchando en http://localhost:${port}`);
  console.log(`   CORS habilitado para: ${frontendOrigin}`);
  console.log(`   Proxy hacia: ${rickMortyBaseUrl}`);
});
