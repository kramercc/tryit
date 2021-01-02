// index.js
const express = require('express');

const app = express();

let indx = 0;

app.get('/', (req, res) => {
  res.send('Hello World from system!')
  console.log('Page accessed ' + ++indx + ' times');
})

app.listen(5000, () => console.log('Server is up and running'));

