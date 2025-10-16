// routes/team.js
// Express router for /team endpoints

// NOTE: This file belongs on the SERVER side (Node/Express). Place it in your server project
// and mount it from your server entry (e.g., server.js or app.js) with something like:
//   const teamRoutes = require('./routes/team');
//   app.use('/team', teamRoutes);
// Or, if you mount at '/api':
//   app.use('/api', teamRoutes);
// then the client must call '/api/team/:id'.

const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// GET /team/:id -> get a pokemon/team member by id
router.get('/:id', pokemonController.getPokemonById);

module.exports = router;
