// Anna asennuskomennot:

// npm init -y
// npm install express

// Luodaan yksinkertainen Express-palvelin
const express = require('express')
const app = express()
const PORT = 3000

// Reititys
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/suomeksi', (req, res) => {
  res.send('Hei Maailma!')
})


// Käynnistetään palvelin
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT)
})