const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

let config = {
  timeoutProbability: 0.2,        // Simula connection timeout (no responde)
  readDelayProbability: 0.3,      // Simula read timeout (tarda en responder)
  readDelayMs: 10000,             // Tiempo de delay (simulando read timeout)
};


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
