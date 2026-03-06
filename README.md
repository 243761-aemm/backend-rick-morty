#  Rick & Morty SOA — Backend (Proxy/API)

Servidor Express que actúa como proxy entre el Frontend y la Rick and Morty API pública.

## Stack
- **Node.js** + **Express**
- **Axios** para peticiones HTTP salientes
- **CORS** configurado para el origen del frontend
- **dotenv** para variables de entorno

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/characters` | Lista de personajes (paginada, filtrable) |
| GET | `/api/characters/:id` | Detalle de un personaje |
| GET | `/api/episodes` | Lista de episodios |
| GET | `/api/locations` | Lista de locaciones |

## Variables de entorno (.env)

```
PORT=4000
RICKMORTY_BASE_URL=https://rickandmortyapi.com/api
FRONTEND_ORIGIN=http://localhost:3000

## Puerto
Corre en `http://localhost:4000`

## Setup local
npm install
npm run dev