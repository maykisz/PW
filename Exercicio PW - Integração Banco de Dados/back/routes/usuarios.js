const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM usuarios');
  res.json(result.rows);
});

// POST
router.post('/', async (req, res) => {
  const { nome, usuario, senha } = req.body;

  const result = await pool.query(
    'INSERT INTO usuarios (nome, usuario, senha) VALUES ($1,$2,$3) RETURNING *',
    [nome, usuario, senha]
  );

  res.json(result.rows[0]);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM usuarios WHERE id=$1', [req.params.id]);
  res.json({ ok: true });
});

module.exports = router;