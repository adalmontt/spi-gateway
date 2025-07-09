const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');


const app = express();
app.use(express.json());

const configPath = path.join(__dirname, 'config.json');

let config = {
  timeoutProbability: 0,
  readDelayProbability: 0,
  readDelayMs: 1000
};

try {
  const configFile = fs.readFileSync(configPath, 'utf-8');
  config = JSON.parse(configFile);
  console.log('Configuración cargada:', config);
} catch (err) {
  console.warn('No se pudo cargar config.json. Usando configuración por defecto:', config);
}

app.all('/test', async (req, res) => {
  const rand = Math.random();

  if (rand < config.timeoutProbability) {
    console.log('[SIMULACIÓN] Connection Timeout');
    return; // No responde nunca
  }

  if (rand < config.timeoutProbability + config.readDelayProbability) {
    console.log('[SIMULACIÓN] Read Timeout');
    return setTimeout(() => {
      res.status(504).send('Read timed out');
    }, config.readDelayMs);
  }

 
  // Respuesta mock en caso de "éxito simulado"
  console.log('[SIMULACIÓN] Éxito simulado');
  res.status(200).json({ message: 'Respuesta exitosa simulada' });
});

app.listen(3000, () => {
  console.log('Proxy de prueba escuchando en puerto 3000');
});
