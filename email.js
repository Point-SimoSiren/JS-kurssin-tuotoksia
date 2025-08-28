
const email = "olli.juhola@careeria.fi"

const nimiOsa = email.split("@")[0]
const loppuOsa = email.split("@")[1]

const company = loppuOsa.split(".")[0]

const etuNimi = nimiOsa.split(".")[0]

const sukuNimi = nimiOsa.split(".")[1]

console.log("Etunimi: " + etuNimi)
console.log("Sukunimi: " + sukuNimi)
console.log("Organisaatio: " + company)

///////////REPLACE ESIM.//////////////
const sivulleJulkaistava = email.replace("@"," at ")
console.log("Nettiin julkaistava osoite: " + sivulleJulkaistava)
