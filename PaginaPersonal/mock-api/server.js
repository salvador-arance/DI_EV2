const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/pizzas', require('./routes/pizzas'));
app.use('/orders', require('./routes/orders'));

app.get('/', (req, res) => {
  res.send('Mock API corriendo dentro del proyecto Angular 🚀');
});

app.listen(PORT, () => {
  console.log(`Mock API levantada en http://localhost:${PORT}`);
});
