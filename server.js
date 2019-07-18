const express = require('express');
const db = require('./data/recipes-model.js');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'welcome to recipes API' });
});

server.get('/api/recipes', async (req, res) => {
    const recipes = await db.getRecipes();
    res.json(recipes);
});

server.get('/api/recipes/:id/ingredients', async (req, res) => {
    const ingredients = await db.getShoppingList(req.params.id);
    res.json(ingredients);
});

server.get('/api/recipes/:id/instructions', async (req, res) => {
    const instructions = await db.getInstructions(req.params.id);
    res.json(instructions);
});

module.exports = server;