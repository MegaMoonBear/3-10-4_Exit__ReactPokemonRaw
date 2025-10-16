// controllers/pokemonController.js
// Server-side controller example for team routes.

// NOTE: This file belongs on the SERVER side (Node/Express). Place it in your server project
// and make sure to export controller functions so your router can import them.
// Example wiring in server.js/app.js:
//   const teamRoutes = require('./routes/team');
//   app.use('/team', teamRoutes);

// Example data source (for demo). Replace with DB calls or real data access.
const sampleTeam = [
  { id: 1, name: 'Bulbasaur', setup: 'Grass starter' },
  { id: 2, name: 'Charmander', setup: 'Fire starter' },
  { id: 3, name: 'Squirtle', setup: 'Water starter' }
];

exports.getPokemonById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = sampleTeam.find(p => p.id === id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  return res.json(item);
};

// If you have other controllers, export them as properties on module.exports:
// module.exports = { getPokemonById, anotherHandler };
