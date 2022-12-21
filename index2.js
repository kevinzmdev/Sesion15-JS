const express = require('express')

const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Suma: 6 + 2 = 8');
})

app.listen(port, () => {
  console.log(`El server se esta iniciando en http://localhost:${port}`)
})