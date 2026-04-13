require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

// Rodar schema
async function runSchema() {
  const file = path.join(__dirname, 'schema.sql');

  if (!fs.existsSync(file)) return;

  const sql = fs.readFileSync(file, 'utf-8');

  await pool.query(sql);
  console.log('✅ Banco pronto');
}

// Start
async function start() {
  try {
    await pool.query('SELECT 1');
    console.log('🔌 Banco conectado');

    if (process.env.RUN_MIGRATIONS === 'true') {
      await runSchema();
    }

    app.listen(process.env.PORT, () => {
      console.log(`🚀 http://localhost:${process.env.PORT}`);
    });

  } catch (err) {
    console.error(err);
  }
}

start();