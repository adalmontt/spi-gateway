# Usa Node.js oficial
FROM node:20

# Crea directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY package*.json ./
COPY config.json ./
COPY index.js ./

# Instala dependencias
RUN npm install

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "index.js"]
