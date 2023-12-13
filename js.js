randomQuote()

const quoteText = document.querySelector(".content");
const authorName = document.querySelector(".author .name");
let quoteBtn = document.getElementById("btn");
quoteBtn.addEventListener("click", randomQuote);
// Random Quote Function //
function randomQuote() {
    // fetching random quoptes / data from the API and passing it into JavaScript Object //
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    });
}
// hghfh