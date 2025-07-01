
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/api/agendamentos', (req, res) => {
  const data = fs.readFileSync('agendamentos.json');
  res.json(JSON.parse(data));
});

app.post('/api/agendamentos', (req, res) => {
  const novo = req.body;
  const agendamentos = JSON.parse(fs.readFileSync('agendamentos.json'));
  agendamentos.push(novo);
  fs.writeFileSync('agendamentos.json', JSON.stringify(agendamentos, null, 2));
  res.status(200).send({ mensagem: 'Agendamento realizado com sucesso!' });
});

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
