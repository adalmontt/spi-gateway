# 🧪 SPI Fault Injection Proxy

Este proyecto es un **gateway de prueba** que simula distintos tipos de fallos al llamar a una API, como:

- ❌ **Connection timeout** (no responde)
- 🕒 **Read timeout** (responde luego de un delay)
- ✅ **Llamada exitosa** (opcionalmente hacia una API real)

Ideal para probar circuit breakers y tolerancia a fallos en microservicios.

---

## 🚀 Cómo ejecutarlo


```bash
git clone https://github.com/tu-usuario/spi-fault-gateway.git
cd spi-fault-gateway
npm install
node app.js

