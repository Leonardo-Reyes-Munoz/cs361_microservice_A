const express = require('express');
const app = express();
const port = 3000;

//routers
const debtRouter = require('./routes/debt');

app.get('/', (req, res) => {
  res.send('Microservice A');
});

app.use('/api/v1/debt', debtRouter);

app.listen(port, () => {
  console.log('Microservice A listening on port 3000...');
});
