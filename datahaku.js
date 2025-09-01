
// fetch komennolla haetaan data palvelimesta
fetch("http://localhost:3000/api/games")
    // response muuttuja sisältää palvelimen vastauksen
    // json metodi muuttaa json datamuotoisen vastauksen javascript objektiksi
    .then(response => response.json())
    .then(data => {
        // data muuttuja sisältää nyt javascript objektin, joka käydään läpi forEach silmukalla
        data.forEach(game => {
            console.log(game.name + " by " + game.publisher + " was published in " + game.releaseYear)
            console.log("-----------------------------")
        })
    })



