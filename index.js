const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Página inicial</h1>');
});

app.get('/multimidia', (req, res) => {
  res.send('<h1>Filmes e séries</h1>');
});

app.get('/mensalidade', (req, res) => {
  res.send('<h1>Preços das mensalidades</h1>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});