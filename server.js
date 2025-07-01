const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const filePath = __dirname + '/db.json';

// Buscar reservas
app.get('/reservas', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

// Adicionar nova reserva
app.post('/reservas', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  data.push(req.body);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ sucesso: true });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});