const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/public/foro.html');
});

app.listen(3000735233888, () => {
  console.log('La aplicación está escuchando en http://localhost:3000735233888');
});
