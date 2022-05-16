const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Hello World, test!')
})

app.get('/uuid', (req, res) => {
  res.send(uuidv4())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})