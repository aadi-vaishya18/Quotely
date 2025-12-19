let quoteText = document.querySelector(".quote");
let quoteBtn = document.querySelector(".new");
let authorName = document.querySelector(".author .name");
let soundBtn = document.querySelector(".speaker");
let copyBtn = document.querySelector(".copy");
let xBtn = document.querySelector(".x");
let whatsappBtn = document.querySelector(".whatsapp");

function randomQuote() {
    quoteBtn.innerText = "Loading...";
    fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
        headers: {
            "X-Api-Key": "FpNYwh/Mbhota83Fzlq/rA==jDoMd1SA6mMwcmEm"
        }
    })
    .then(res => res.json())
    .then(data => {
        quoteText.innerText = data[0].quote;
        authorName.innerText = `— ${data[0].author}`;
        quoteBtn.innerText = "New Quote";
    })
    .catch(() => {
        quoteText.innerText = "Failed to load quote 😢";
        quoteBtn.innerText = "New Quote";
    });
}

/* Speaker */
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(
        `${quoteText.innerText} by ${authorName.innerText}`
    );
    speechSynthesis.speak(utterance);
});

/* Copy */
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteText.innerText} ${authorName.innerText}`);
});

/* X (Twitter) */
xBtn.addEventListener("click", () => {
    let text = `"${quoteText.innerText}" ${authorName.innerText}`;
    let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
});

/* WhatsApp */
whatsappBtn.addEventListener("click", () => {
    let text = `"${quoteText.innerText}" ${authorName.innerText}`;
    let url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

/* Load quote on page load */
randomQuote();
