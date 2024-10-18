import API_KEY from './ApiKey.js';
const quotebox = document.querySelector(".quotebox");
const author = document.querySelector(".author");
const newquotebtn = document.querySelector(".newquote");
const sharebtn = document.querySelector(".share");
async function getRandomQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=age', {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        quotebox.innerHTML= "“"+" " + data[0].quote + " "+"”";
        author.innerText= "- by" + " " + data[0].author;
        
    } catch (error) {
        console.error('Error:', error);
    }

}
getRandomQuote();
newquotebtn.addEventListener("click",getRandomQuote);

sharebtn.addEventListener("click", function() {
   
    const quote = quotebox.innerHTML; 
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(tweetUrl, "_blank");
});