// <!-- Use key events to listen for the letters that your players will type. -->

// Variables

var possibleWords = ["list", "words", "here"];


//Empty variables
var guessingWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var guessedLetters = [];
var currentStatus = [];
var wordToMatch
var numGuess
var wins = 0

// resetGame(); need function to reset game.


//Shows word with underscores instead of letters.
for (i = 0; i < guessingWord.length; i++) {
    currentStatus[i] = "_"
}
console.log(guessingWord);


console.log(currentStatus.join(' '));
var currentWordEl = document.getElementById('currentWord');
currentWordEl.innerText = currentStatus.join(' ');


var isAlpha = function(ch){
    return /^[A-Z]$/i.test(ch);
  }

//onkeypress event goes here.  "KEY EVENT"
// when a key is pressed start the game if the key is an uppercase alphabet character.
document.onkeypress = function (e) {
    console.log(isAlpha(e.key));
    if (isAlpha(e.key)){
        var letterInWord = checkForLetter(e.key);
        console.log(typeof letterInWord);
        if(letterInWord){
            //Inside this b;lock we know the gues was in the word
            //we need to update teh underscores on screen
            console.log(currentStatus)
        }
        else {
            //Guess was not in the word
            //add the letter to letters guessed array (push method)
            console.log(currentStatus)

        }

        //Is teh game completed
        if(currentStatus.indexOf('_') < 0){
            //User has completed the word
            alert('you win');
        }
    }
    else {
        //You didnt give us good input
        alert ("Need an actual letter!")
    }
       
    

}
//Check if letter is in the word and then process 
function checkForLetter(keyPressed){
    //var guess = document.getElementById("guess").value;
    var found = false;
    for (i = 0; i < guessingWord.length; i++) {
        if (guessingWord[i].toLowerCase() === keyPressed.toLowerCase()) {
            // if the guess donst exist set a flag and check later
            // 
            currentStatus[i] = guessingWord[i];
            found = true;
        }
    }

    return found;
}



//Need function to update display.
// function updateDisplay() {
    // document.getElementById("currentWord").innerText = guessingWord.join("");
// }
