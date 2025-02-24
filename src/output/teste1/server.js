// server.ejs

const express = require('express');
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bem-vindo à API teste1!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});

// template de api com express que lê JSON e Formulários HTML