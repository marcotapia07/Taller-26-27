// src/index.js
import 'dotenv/config'; // Carga las variables de entorno desde .env
import express from 'express';
import mongoose from 'mongoose';
import { connection } from './database.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server on : http://localhost:${port}`);
});

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
