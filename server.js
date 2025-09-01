// Anna asennuskomennot:

// npm init -y
// npm install express

// Luodaan yksinkertainen Express-palvelin
const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT
const path = require('path') //////////////

// Tehdään polkumääritys front kansioon 
const polku = path.join(__dirname, '/front')////////////////

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
app.use(express.static(polku))///////////////


// Reititys
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/suomeksi', (req, res) => {
  res.send('Hei Maailma!')
})


// Käynnistetään palvelin
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT)
})