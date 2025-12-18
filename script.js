let quoteText = document.querySelector(".quote");
let quoteBtn = document.querySelector(".new");
let authorName = document.querySelector(".author .name");
let soundBtn = document.querySelector(".speaker");
let copyBtn = document.querySelector(".copy");
let xBtn = document.querySelector(".x");

function randomQuote() {
    quoteBtn.innerText="Loading....."
    quoteBtn.classList.add("loading");
    fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
        method: "GET",
        headers: {
            "X-Api-Key": "FpNYwh/Mbhota83Fzlq/rA==jDoMd1SA6mMwcmEm"
        }
    })
    .then(res => res.json())
    .then(data => {
            quoteText.innerText = `${data[0].quote}`;
            authorName.innerText = `${data[0].author}`;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
    })
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
}); 

xBtn.addEventListener("click", ()=> {
    let xUrl = `https://x.com/intent/x?url=${quoteText.innerText}`;
    window.open(xUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);