const API = "https://type.fit/api/quotes";

let quotes = [];
fetch(API)
.then(res => res.json())
.then(data =>{
    
    const quoteIndex=  Math.floor(Math.random() * data.length)
    const randomQuote = data[quoteIndex];
    const quoteDisplayed = document.getElementById("quotes");

    const markup =
        `
        <h2 id="quote">${randomQuote.text}</h2>
        `

    quoteDisplayed.innerHTML = markup;
    slipQuote(randomQuote.text)

});

let seconds;
let timer
function selectTime(){

    const textArea = document.getElementById("typeBox");
    const timerDisplay = document.getElementById("timer");
    const time = document.getElementById("timerSelect").value;

 
    seconds = time;

    textArea.addEventListener("focus", function() {
       
         timer = setInterval(function() {
            seconds--;
            timerDisplay.innerHTML = seconds + " seconds remaining.";
            if (seconds === 0) {
              clearInterval(timer);
              timerDisplay.innerHTML = "Time's up!";
            }
          }, 1000);
      });
}


let quoteArray = [];
function slipQuote(quote){
    quoteArray = quote;
    console.log(quoteArray);
}




let typedText = [];
let quoteIndex = 0;

const textArea = document.getElementById("typeBox");

textArea.addEventListener("input", (event) => {
    const value = event.target.value;
    let mismatch = false;
  
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== quoteArray[i]) {
        mismatch = true;
        break;
      }
    }
    if (mismatch) {
      textArea.style.color = "red";
    } else {
      textArea.style.color = "black";
      if(value === quoteArray){
        clearInterval(timer)
        // console.log(clearInterval(timer));
        const timerDisplay = document.getElementById("timer");
        timerDisplay.innerHTML = "Score: 1 points.";
      }
    }
  });














