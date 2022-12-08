let frase = null;
let autor = null;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const campoFrase = document.getElementById("exibeFrase");
    const campoAutor = document.getElementById("exibeAutor");
    const botaoMudaFrase = document.getElementById("botaoNovaFrase");

    fazFetch(campoFrase, campoAutor);

    botaoMudaFrase.addEventListener("click", () => {
        campoAutor.innerText = "";
        campoFrase.innerText = "Loading..";

        fazFetch(campoFrase, campoAutor)
    });
}

async function fazFetch(campoFrase, campoAutor) {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
    const response = await fetch(url);
    const result = await response.json();
    
    frase = result.data[0].quoteText;
    autor = result.data[0].quoteAuthor;

    campoFrase.innerText = frase;
    campoAutor.innerText = autor;
}